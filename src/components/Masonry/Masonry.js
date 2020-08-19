import React from 'react';

class Masonry extends React.Component {
  constructor(props) {
    super(props);

    let state = {};

    for (let i = 0; i < this.props.columns; i++) state[`col-${i}`] = [];

    this.state = state;
  }

  componentDidMount() {
    const tiles = this.getTiles(this.props);

    this.addTiles(tiles);
  }

  componentWillReceiveProps(nextProps, any) {
    try {
      if (
        nextProps.columns !== this.props.columns ||
        !this.areArraysEqual(nextProps.images, this.props.images) ||
        (nextProps.children || []).length !==
          (this.props.children || []).length ||
        !(nextProps.children || []).every((child, i) => {
          return nextProps.children[i].key === this.props.children[i].key;
        })
      ) {
        let newState = {};
        for (let i = 0; i < nextProps.columns; i++) {
          newState[`col-${i}`] = [];
        }
        this.setState(newState);

        this.cancel();

        const tiles = this.getTiles(nextProps);

        this.addTiles(tiles);
      }
    } catch (error) {
      console.warn(error.message);
    }
  }

  cancel = () => {};

  areArraysEqual = (a, b) => {
    return (
      a.length === b.length &&
      a.sort().every(function (value, index) {
        return value === b.sort()[index];
      })
    );
  };

  getShortestColumn = (container) => {
    const columns = container.querySelectorAll('.react-masonry-column');

    let shortestColumn = 0;
    columns.forEach((column, index) => {
      if (column.offsetHeight < columns[shortestColumn].offsetHeight) {
        shortestColumn = index;
      }
    });

    return shortestColumn;
  };

  getImages = (element) => {
    if (!element) {
      return [];
    }

    if (element.type === 'img') {
      return [element.props.src];
    }

    let children = element.props ? element.props.children : false;

    if (children) {
      let images = [];
      React.Children.forEach(children, (child) => {
        images = images.concat(this.getImages(child));
      });
      return images;
    }

    return [];
  };

  loadImages = (images) => {
    const data = [];

    images.forEach((src) => {
      data.push(
        new Promise((resolve, reject) => {
          let image = new Image();

          image.onload = resolve;
          image.onerror = reject;
          image.src = src;

          this.cancel = function () {
            image.src = '';
          };
        }),
      );
    });

    return Promise.all(data);
  };

  getTiles = (props) => {
    let tiles = [];

    if (props.images) {
      tiles = props.images.map((image, index) => {
        return (
          <img
            src={image}
            alt={image}
            key={`img-${index}${Date.now()}`}
            style={{
              border: '2px solid transparent',
              boxSizing: 'border-box',
            }}
          />
        );
      });
    } else if (props.children) {
      tiles = props.children;
    } else {
      console.warn('No images were passed into react-masonry');
    }

    return tiles;
  };

  addTiles = (tiles) => {
    tiles.forEach((tile, index) => {
      if (!tile) {
        return;
      }

      let style = {};

      let animate = this.props.hasOwnProperty('animate')
        ? this.props.animate
        : true;
      if (animate) {
        style.animation = 'fadeIn 1s ease-in';
      }

      style.order = index;

      if (tile && tile.props && tile.props.style) {
        style = Object.assign({}, tile.props.style, style);
      }
      tile = React.cloneElement(tile, { style });

      const images = this.getImages(tile);
      this.loadImages(images)
        .then(() => {
          const container = this.refs.container;

          if (!container) {
            return;
          }

          const shortestColumn = this.getShortestColumn(container);

          this.setState({
            [`col-${shortestColumn}`]: this.state[
              `col-${shortestColumn}`
            ].concat([tile]),
          });
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  render() {
    let columns = [];

    const containerWidth = this.props.hasOwnProperty('width')
      ? this.props.width
      : '100%';
    const containerHeight = this.props.hasOwnProperty('height')
      ? this.props.height
      : this.props.scrollable
      ? '500px'
      : 'auto';
    const overflowY = this.props.scrollable ? 'scroll' : 'hidden';

    for (let i = 0; i < this.props.columns; i++) {
      columns.push(
        <div
          style={{
            width: 100 / this.props.columns + '%',
            display: 'flex',
            flexDirection: 'column',
            float: 'left',
          }}
          className="react-masonry-column"
          key={`col-${i}`}
        >
          {Object.values(this.state[`col-${i}`])}
        </div>,
      );
    }

    const styles = `
			.react-masonry-column * {
				width: 100%;
				box-sizing: border-box;
			}

			@keyframes fadeIn {
				from {
					opacity: 0;
				}

				to {
					opacity: 1;
				}
			}
		`;

    return (
      <div
        ref="container"
        style={{
          width: containerWidth,
          height: containerHeight,
          overflowX: 'hidden',
          overflowY: overflowY,
          margin: 'auto',
        }}
        className={this.props.className}
      >
        <style>{styles}</style>
        {columns}
      </div>
    );
  }
}

export default Masonry;

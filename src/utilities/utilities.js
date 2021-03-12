/* eslint-disable import/no-anonymous-default-export */

export const findImageByName = (name = '', data = []) => {
	let image = {};

	if (data === undefined) {
		return image;
	}

	const target = data.filter(edge => {
		let currentImage = edge.node.childImageSharp.gatsbyImageData;

		if (currentImage.images.fallback.src.includes(name)) {
			return currentImage;
		}

		return null;
	})

	image = target.length !== 0 ? target[0].node.childImageSharp.gatsbyImageData : '';

	return image;
}

export default {
	findImageByName
};

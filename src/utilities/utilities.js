/* eslint-disable import/no-anonymous-default-export */

export const findImageByName = (name = '', logos = []) => {
	let image = {};

	const target = logos.filter(edge => {
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

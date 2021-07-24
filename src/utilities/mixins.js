/* eslint-disable no-shadow */
/* eslint-disable import/no-anonymous-default-export */

export const device = {
	iPhone11: () => '375px',
	iPhone12: () => '430px',
	iPad: () => '768px',
	iPadProVertical: () => '834px',
	iPadPro: () => '1024px',
	iPadProLandscape: () => '1194px',
	iPadPro12Landscape: () => '1366px',
	MacbookAir: () => '1440px',
	Desktop: () => '1920px',
};

export const until = (device, content, props = {}) => `
		@media (max-width: ${device}) {
			${content(props)}
		}
	`;

export default {
	until,
	device,
};

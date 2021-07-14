/* eslint-disable no-shadow */
/* eslint-disable import/no-anonymous-default-export */

export const device = {
	iPhone: () => '430px',
	iPad: () => '768px',
	iPadProVertical: () => '834px',
	iPadPro: () => '1024px',
	iPadProLandscape: () => '1194px',
	MacbookAir: () => '1440px',
	Desktop: () => '1920px',
};

export const until = (device, content) => `
		@media screen and (max-width: ${device}) {
			${content()}
		}
	`;

export default {
	until,
	device,
};

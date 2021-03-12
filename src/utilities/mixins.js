/* eslint-disable no-shadow */
/* eslint-disable import/no-anonymous-default-export */

export const device = {
  iPhone: () => '430px',
  iPad: () => '768px',
  iPadPro: () => '1024px',
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

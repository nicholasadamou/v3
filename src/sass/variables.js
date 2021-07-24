import { css } from 'styled-components';

const variables = css`
  :root {
    --white: #fafafa;
    --black: #212121;
    --light-grey: #ccc;
    --grey: #f5f5f5;
    --yellow: #ffd602;
    --blue: #5496FF;

    --github: #161514;
    --codepen: #1e1f26;
    --linkedin: #0077b5;
    --netlify: #15837d;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --scrollbar: var(--black);
    --scrollbar-bg: var(--white);

    --primary: "Roboto Slab";
    --secondary: "Inter";

    --highlight: var(--blue);
    --selection: var(--white);

    --copy: var(--black);
    --copy-size: var(--fz-md);

    --loading: var(--white);
    --background: var(--white);
  }
`;

export default variables;

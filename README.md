<div align="center">

# Nicholas Adamou's Personal Website [![Build Status](https://travis-ci.org/nicholasadamou/nicholasadamou.com.svg?branch=master)](https://travis-ci.org/nicholasadamou/nicholasadamou.com) [![CircleCI](https://circleci.com/gh/nicholasadamou/nicholasadamou.com.svg?style=svg)](https://circleci.com/gh/nicholasadamou/nicholasadamou.com)

Personal landing page, powered by [facebook/create-react-app](https://github.com/facebook/create-react-app), [Netlify](https://netlify.com/).

![license](https://img.shields.io/apm/l/vim-mode.svg)
![javascript style guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)

</div>

## Description

After many iterations and deployments throughout many providers, I decided to
optimize my landing page by using [facebook/create-react-app](https://github.com/facebook/create-react-app) and [Netlify](https://netlify.com/).

## Development

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/) (recommended)

### Steps

Run the live-reload server on <http://localhost:3000>

```bash
make dev
```

Or run the live-reload server on <http://localhost:8888> with _Netlify_ (λ) functions:

```bash
make netlify
```

## 📚 The Tech. Stack

This project uses the following technologies:

**The Front-End**:

- [**React.js**](https://reactjs.org/) - For building the interface along with:
  - [**Styled-Components**](https://www.styled-components.com/) - for styling.
  - [**instant.page**](https://instant.page/) - Make your site's pages instant in 1 minute and improve your conversion rate by 1%.
  - [**github-api**](https://www.npmjs.com/package/github-api) - For making requests to the GitHub API within React.

**The Back-End**:

- [**Netlify**](https://netlify.com/) - For serverless [**functions**](functions/).

## ⛓️ CI/CD Pipeline

This project uses the following CI/CD Pipeline:

1. [**Travis CI**](https://travis-ci.org/nicholasadamou/nicholasadamou.com) - Travis is used to test whether or not this project builds successfully.
2. [**Netlify**](https://netlify.com/) - For continuous deployment to [_nicholasadamou.com_](https://nicholasadamou.com).
3. [**CircleCI**](https://circleci.com/) - Used for the same reason as Travis CI.

## 📚 The Design Stack

This project uses the following technologies:

- [**Bulma**](https://bulma.io/) - A free, open-source CSS framework based on Flexbox and used by more than 200,000 developers.
- [**Carbon Design System**](https://carbondesignsystem.com) - Carbon is the design system for IBM web and product. It is a series of individual styles, components, and guidelines used for creating unified UI.
- [**Figma**](https://www.figma.com/) - Build better products as a team. Design, prototype, and gather feedback all in one place with Figma.

## License

© Nicholas Adamou.

It is free software, and may be redistributed under the terms specified in the [LICENSE] file.

[license]: LICENSE

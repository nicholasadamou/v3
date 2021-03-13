<div align="center">

# Nicholas Adamou's Personal Website

Personal landing page, powered by [gatsbyjs](https://www.gatsbyjs.com/) and [Netlify](https://netlify.com/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/fedaa871-c59d-4923-9c65-f29330bf60da/deploy-status)](https://app.netlify.com/sites/nicholasadamou/deploys) [![CircleCI](https://circleci.com/gh/nicholasadamou/nicholasadamou.com.svg?style=svg)](https://circleci.com/gh/nicholasadamou/nicholasadamou.com) ![license](https://img.shields.io/apm/l/vim-mode.svg)

</div>

## Description

After many iterations and deployments throughout many providers, I decided to
optimize my landing page by using [gatsbyjs](https://www.gatsbyjs.com/) and [Netlify](https://netlify.com/).

## Development

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/) (recommended)

### Steps

Run the live-reload server on <http://localhost:8000>.

```bash
yarn start
```

If needed, you can then access the [GraphiQL](https://www.gatsbyjs.com/docs/how-to/querying-data/running-queries-with-graphiql/) interface on <http://localhost:8000/___graphql>.

## 📚 The Tech. Stack

This project uses the following technologies:

**The Front-End**:

- [**Gatsby**](<https://www.gatsbyjs.com/>) - Used as base React framework along with:
  - [**Styled-Components**](https://www.styled-components.com/) - for styling.
  - [**Font Awesome**](https://fontawesome.com/how-to-use/on-the-web/using-with/react) - for icons.
  - [**Carbon**](https://react.carbondesignsystem.com/?path=/story/getting-started-welcome--welcome) & [**Material UI**](https://material-ui.com/) - for loading animations.
  - [**Bulma**](https://bulma.io/) - for layout styling.
  - [**Moment.js**](https://momentjs.com/) - for handling dates.

## ⛓️ CI/CD Pipeline

This project uses the following CI/CD Pipeline:

1. [**CircleCI**](https://circleci.com/) - CircleCI is used to test whether or not this project builds successfully.
2. [**Netlify**](https://netlify.com/) - For continuous deployment to [_nicholasadamou.com_](https://nicholasadamou.com).

## License

© Nicholas Adamou.

It is free software, and may be redistributed under the terms specified in the [LICENSE] file.

[license]: LICENSE

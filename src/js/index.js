/* eslint-disable no-new */
/* eslint-disable no-undef */

//= include components/smoothScroll.js
//= include components/toggleNav.js
//= include components/getStars.js

$(() => {
  toggleNav()

  smoothScroll()

  getStars()

  new LazyLoad({ elements_selector: '.lazy' })
})

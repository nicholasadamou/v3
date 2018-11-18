/* eslint-disable no-new */
/* eslint-disable no-undef */

//= include components/smoothScroll.js
//= include components/toggleNav.js
//= include components/getStars.js

$(() => {
  toggleNav()

  smoothScroll()

  getStars()

  new LazyLoad({
    elements_selector: '.lazy.has-webp',
    to_webp: true
  })

  new LazyLoad({
    elements_selector: '.lazy:not(.has-webp)'
  })
})

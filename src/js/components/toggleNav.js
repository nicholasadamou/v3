/* eslint-disable func-names */
// eslint-disable-next-line no-unused-vars
function toggleNav () {
  const hamburger = $('.hamburger')
  const link = $('.nav_link')
  const logo = $('#logo-link')
  const body = $('body')

  hamburger.bind('click', function () {
    hamburger.toggleClass('is-active')
    $('body').toggleClass('nav-open')
    this.blur()
    return false
  })

  link.bind('click', function () {
    hamburger.removeClass('is-active')
    $('body').removeClass('nav-open')
    this.blur()
  })

  logo.bind('click', function () {
    hamburger.removeClass('is-active')
    $('body').removeClass('nav-open')
    this.blur()
  })

  body.bind('click', function () {
    body.removeClass('nav-open')
    hamburger.removeClass('is-active')
    this.blur()
  })
}

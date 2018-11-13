/* eslint-disable camelcase */

// eslint-disable-next-line no-unused-vars
function getStars () {
  // Round the number like "3.5k" https://stackoverflow.com/a/9461657
  const round = num => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num)

  // Add the most recent star count to the repositories.
  // eslint-disable-next-line no-undef
  document.querySelectorAll('.repositories .repo a').forEach(async (a) => {
    const link = a

    const name = link.getAttribute('href').split('/').slice(-2).join('/')
    const url = `https://api.github.com/repos/${name}`
    const { stargazers_count } = await fetch(url).then(res => res.json())

    if (!stargazers_count) return

    link.querySelector('.stars').innerText = `${'⭐️ '}${round(stargazers_count)}`
  })
}

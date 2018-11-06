function getStars() {
	// Round the number like "3.5k" https://stackoverflow.com/a/9461657
	const round = num => num > 999 ? (num / 1000).toFixed(1) + 'k' : num;

	// Add the most recent star count to the repositories.
	document.querySelectorAll('.repositories .repo a').forEach(async link => {
		const name = link.getAttribute('href').split('/').slice(-2).join('/');
		const url = 'https://api.github.com/repos/' + name;
		const { stargazers_count } = await fetch(url).then(res => res.json());

		if (!stargazers_count) return;
    
    	link.querySelector('.stars').innerText = '⭐️' + ' ' + round(stargazers_count);
	});
}

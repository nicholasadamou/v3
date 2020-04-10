import React from 'react'

import './index.scss'

const FooterText = (content, linkBody, link, linkClassName) => (
	<p className="footer-text">
		{content}
		<a
			href={link}
			target="_blank"
			aria-hidden="true"
			rel="noopener noreferrer"
			className={`${linkClassName} link`}
		>
			{linkBody}
		</a>
	</p>
)

export default FooterText

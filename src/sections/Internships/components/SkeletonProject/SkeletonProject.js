import React from 'react'

import './index.scss'

import { SkeletonText } from 'carbon-components-react'

import CircularProgress from "@material-ui/core/CircularProgress"

const SkeletonProject = (id, emoji, label) => (
	<article className="project" key={id}>
		<div className="top">
			<span
				className="emoji"
				role="img"
				aria-label={label}
			>
				{emoji}
			</span>
			<span className="project-title">
				<CircularProgress />
			</span>
		</div>
		<div className="bottom">
			<span className="desc">
				<SkeletonText
					heading={false}
					lineCount={2}
					paragraph
					width="100%"
				/>
			</span>
		</div>
	</article>
)

export default SkeletonProject

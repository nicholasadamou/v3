import React from 'react';

import './index.scss'

import { SkeletonText } from 'carbon-components-react'

import CircularProgress from "@material-ui/core/CircularProgress";

const SkeletonRepo = (emoji, label) => {
	return (
		<article className="repo">
			<div className="top">
				<div className="left">
					<span
						className="emoji"
						role="img"
						aria-label={label}
					>
						{emoji}
					</span>
					<span className="repo-title">
						<CircularProgress />
					</span>
				</div>
				<div className="right">
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a
						href="#"
						target="_blank"
						aria-hidden="true"
						aria-label={`github stars`}
						title="star"
						rel="noopener noreferrer"
					>
						<span
							className="stars"
							role="img"
							aria-label="star"
						>
							<i className="fas fa-star"></i>
								<>
									{' '}<CircularProgress />
								</>
						</span>
					</a>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a
						href="#"
						target="_blank"
						aria-hidden="true"
						aria-label={`fork on github`}
						title="fork"
						rel="noopener noreferrer"
					>
						<span
							className="forks"
							role="img"
							aria-label="branch"
						>
							<i className="fas fa-code-branch"></i>
								<>
									{' '}<CircularProgress />
								</>
						</span>
					</a>
				</div>
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
}

export default SkeletonRepo

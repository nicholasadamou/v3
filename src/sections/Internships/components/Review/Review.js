import React from "react";

import "./index.scss";

const Review = (author, source, quote, image) => (
  <div className="review">
    <blockquote className="review-quote">
      <q>"{quote}"</q>
      <div className="review-footer">
        <img src={image} alt="avatar" className="review-image" />
        <div className="review-cite">
          <span className="review-author">{author}</span>
          <span className="review-source">{source}</span>
        </div>
      </div>
    </blockquote>
  </div>
);

export default Review;

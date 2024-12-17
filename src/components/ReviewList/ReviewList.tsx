import Review from '../Review/Review';
import { Comment } from '../../types/comment';
import React from 'react';

function ReviewList({guestReviews}:{guestReviews:Comment[]}){
  return(
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{guestReviews.length}</span></h2>
      <ul className="reviews__list" data-testid="reviews-list">
        {guestReviews.slice(0,10).map((rev) =>
          (
            <Review key = {rev.id} guestReview={rev}/>
          ))}
      </ul>
    </>
  );
}

export default React.memo(ReviewList);

import React from 'react';
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import { cardProps } from '../../../utils';

function ReviewCard({ review } : cardProps) {
  return (
    <div className="ReviewCard">
      <Rate disabled allowHalf defaultValue={review.rate} />
      <p>
        {review.content}
      </p>
    </div>
  );
}
export default ReviewCard;

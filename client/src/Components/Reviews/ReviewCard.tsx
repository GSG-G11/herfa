import React from 'react';
import { Rate } from 'antd';
import 'antd/dist/antd.css';

interface cardProps {
  review: {
    rate:number,
  content:string,
  }

}
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
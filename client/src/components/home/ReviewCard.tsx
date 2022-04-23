import React from 'react';
import { Rate } from 'antd';
import 'antd/dist/antd.css';

type cardProps = {
  rate: number,
  description: string,
}
function ReviewCard({ rate, description }:cardProps) {
  return (
    <div className="ReviewCard">
      <Rate disabled allowHalf defaultValue={rate} />
      <p>
        {description}
      </p>
    </div>
  );
}
export default ReviewCard;

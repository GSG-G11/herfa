import React from 'react';
import { Carousel } from 'antd';
import ReviewCard from './ReviewCard';
import { TopTenReviews, HomeReviewProps } from '../../utils';
import './style.css';

function HomeReview({ data }: HomeReviewProps) {
  return (
    data?.length ? (
      <div className="reviewsSection container">
        <div className="carouselContainer">
          <Carousel autoplay arrows className="reviewSlider">
            {data?.map(
              (item: TopTenReviews) => <ReviewCard key={item.userId} review={item} />,
            )}
          </Carousel>
        </div>
      </div>
    ) : null
  );
}

export default HomeReview;

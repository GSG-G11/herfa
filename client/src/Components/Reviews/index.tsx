import React from 'react';
import { Carousel } from 'antd';
import { useTranslation } from 'react-i18next';
import ReviewCard from './ReviewCard';
import { TopTenReviews } from '../../utils';
import './style.css';

interface reviewsProps {
  reviews: TopTenReviews[],
}

function HomeReview({ reviews }:reviewsProps) {
  const { t } = useTranslation();
  return (
    <div className="reviewsSection">
      <h2 className="headline-text">
        {t('what-they-say-about-us')}
      </h2>
      <div className="carouselContainer">
        <Carousel autoplay arrows className="reviewSlider">
          {reviews.map((item: TopTenReviews) => <ReviewCard key={item.userId} review={item} />)}
        </Carousel>
      </div>
    </div>
  );
}

export default HomeReview;

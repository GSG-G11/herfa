import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import { useTranslation } from 'react-i18next';
import ReviewCard from './ReviewCard';

type reviewProps = {
  rate : number,
  description :string,
}

function HomeReview({ rate, description }:reviewProps) {
  return (
    <div className="reviewsSection">
      <h2>
        {useTranslation().t('what-they-say-about-us')}
      </h2>
      <div className="carouselContainer">
        <Carousel autoplay arrows className="reviewSlider">
          <ReviewCard
            rate={rate}
            description={description}
          />
          <ReviewCard
            rate={rate}
            description={description}
          />
          <ReviewCard
            rate={rate}
            description={description}
          />
          <ReviewCard
            rate={rate}
            description={description}
          />
          <ReviewCard
            rate={rate}
            description={description}
          />
          <ReviewCard
            rate={rate}
            description={description}
          />
          <ReviewCard
            rate={rate}
            description={description}
          />
        </Carousel>
      </div>
    </div>
  );
}

export default HomeReview;

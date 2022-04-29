import React, { useContext } from 'react';
import { Carousel } from 'antd';
import { useTranslation } from 'react-i18next';
import ReviewCard from './ReviewCard';
import { TopTenReviews } from '../../utils';
import { ServiceLocation } from '../../Context/ServiceLocationContext';
import './style.css';

function HomeReview() {
  const { t } = useTranslation();
  const { data: { topTenReviews } } = useContext(ServiceLocation);
  return (
    <div className="reviewsSection">
      <h2 className="headline-text">
        {t('what-they-say-about-us')}
      </h2>
      <div className="carouselContainer">
        <Carousel autoplay arrows className="reviewSlider">
          {topTenReviews.map(
            (item: TopTenReviews) => <ReviewCard key={item.userId} review={item} />,
          )}
        </Carousel>
      </div>
    </div>
  );
}

export default HomeReview;

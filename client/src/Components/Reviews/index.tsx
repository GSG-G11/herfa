import React from 'react';
import { Carousel, Empty } from 'antd';
import { useTranslation } from 'react-i18next';
import ReviewCard from './ReviewCard';
import { TopTenReviews, HomeReviewProps } from '../../utils';
import './style.css';

function HomeReview({ data }: HomeReviewProps) {
  const { t } = useTranslation();
  return (
    data?.length ? (
      <div className="reviewsSection">
        <h2 className="headline-text">
          {t('what-they-say-about-us')}
        </h2>
        <div className="carouselContainer">
          <Carousel autoplay arrows className="reviewSlider">
            {data?.map(
              (item: TopTenReviews) => <ReviewCard key={item.userId} review={item} />,
            )}
          </Carousel>
        </div>
      </div>
    ) : (<Empty description={(<span>{t('no-data')}</span>)} />)
  );
}

export default HomeReview;

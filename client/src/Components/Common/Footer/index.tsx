import { Image, Layout, Divider } from 'antd';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './style.css';
import { ServiceLocation } from '../../../Context';
import { serviceObject } from '../../../utils';

function Footer({ language }: any) {
  const { t } = useTranslation();
  const { data: { services } } = useContext(ServiceLocation);

  return (
    <Layout.Footer>
      <div className="footer-content">
        <div className="row">
          <div className="col-1">
            <div className="logo"><Link to="/"><Image preview={false} src={language === 'ar' ? '/images/logo_ar.png' : '/images/logo_en.png'} alt="herfa logo" /></Link></div>
            <div className="footer-items pages">
              <Link to="/"> {t('home-greeting')} </Link>
              <Link to="/search"> {t('search-greeting')} </Link>
              <Link to="/login">{t('home-join-us')}</Link>
            </div>
          </div>
          <div className="col-2">
            <h2 className="footer-col-header"> {t('all-services')} </h2>
            <div className="footer-items footer-services">
              {services.map(
                (item :serviceObject) => (
                  <Link key={item.name} to="/search" state={{ serviceSearch: item.id }}>{t(item.name)}</Link>
                ),
              )}
            </div>
          </div>
          <div className="col-3">
            <h2 className="footer-col-header"> {t('locations')} </h2>
            <div className="footer-items">
              <p>{t('north-gaza')}</p>
              <p>{t('gaza')}</p>
              <p>{t('central-governorate')}</p>
              <p>{t('south-gaza')}</p>
            </div>
          </div>
        </div>
        <Divider />
        <div className="bottom">
          {t('footer')}
        </div>
      </div>
    </Layout.Footer>
  );
}

export default Footer;

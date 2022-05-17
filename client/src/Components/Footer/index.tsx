import { Image, Layout, Divider } from 'antd';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './style.css';
import logo from '../../assets/logo_ar.png';
import { ServiceLocation } from '../../Context/ServiceLocationContext';
import { serviceObject } from '../../utils';

function Footer() {
  const { t } = useTranslation();
  const { data: { services } } = useContext(ServiceLocation);

  return (
    <Layout.Footer>
      <div className="footer-content">
        <div className="row">
          <div className="col-1">
            <div className="logo"><Link to="/"><Image preview={false} src={logo} alt="herfa logo" /></Link></div>
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
                  <Link key={item.name} to="/search" state={{ serviceSearch: item.id }}>{item.name}</Link>
                ),
              )}
            </div>
          </div>
          <div className="col-3">
            <h2 className="footer-col-header"> {t('locations')} </h2>
            <div className="footer-items">
              <p>شمال غزة</p>
              <p> محافظة غزة </p>
              <p> المحافظة الوسطى </p>
              <p> جنوب غزة </p>
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

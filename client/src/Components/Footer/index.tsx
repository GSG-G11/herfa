import { Image, Layout, Divider } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './style.css';
import logo from '../../assets/logo_ar.png';

function Footer() {
  const { t } = useTranslation();

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
            <h2 className="footer-col-header"> {t('home-main-services')} </h2>
            <div className="footer-items services">
              <Link to="/">السباكة</Link>
              <Link to="/"> الحدادة </Link>
              <Link to="/"> النجارة </Link>
              <Link to="/"> الجبس والديكور</Link>
              <Link to="/"> اعمال التنظيف </Link>
              <Link to="/"> الكهرباء العامة </Link>
              <Link to="/"> اعمال البناء </Link>
              <Link to="/"> الحدائق والبستنة </Link>
              <Link to="/"> ميكانيكا السيارات </Link>
              <Link to="/"> أعمال النسيج </Link>
            </div>
          </div>
          <div className="col-3">
            <h2 className="footer-col-header"> {t('locations')} </h2>
            <div className="footer-items">
              <Link to="/">شمال غزة</Link>
              <Link to="/search"> محافظة غزة </Link>
              <Link to="/search"> المحافظة الوسطى </Link>
              <Link to="/search"> جنوب غزة </Link>
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

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function NotFound() {
  return (
    <div className="cont">
      <div className="mainBox">
        <div className="err">404</div>
      </div>
      <div className="msg">{useTranslation().t('notFound')}</div>
      <Link to="/" className="a"> Go To Home </Link>
    </div>
  );
}

export default NotFound;

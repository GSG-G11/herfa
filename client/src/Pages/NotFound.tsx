import React from 'react';
import { useTranslation } from 'react-i18next';

function NotFound() {
  return (
    <div className="container">
      {useTranslation().t('notFound')}
    </div>
  );
}

export default NotFound;

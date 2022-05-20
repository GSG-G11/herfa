import React from 'react';
import { Alert } from 'antd';
import { useTranslation } from 'react-i18next';
import './style.css';

function ErrorComponent({ errorMessage } : any) {
  const { t } = useTranslation();
  return (
    <div className="error-container">
      <Alert message={t('error-heading')} description={`the error is ${errorMessage}`} type="error" showIcon style={{ width: '40%' }} />
    </div>
  );
}

export default ErrorComponent;

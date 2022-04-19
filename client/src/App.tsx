import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="container">
      {t('title')}
      {/* مرحبا بك */}
      <form>
        {/* {i18n.language === 'ar' && (
        <button
          type="button"
          onClick={() => i18n.changeLanguage('ar')}
        >
          Ar
        </button>
        )}
        {i18n.language === 'en' && (
        <button
          type="button"
          onClick={() => i18n.changeLanguage('En')}
        >
          En
        </button>
        )} */}
        <button type="button" onClick={() => i18n.changeLanguage('ar')}>Ar</button>
        <button type="button" onClick={() => i18n.changeLanguage('En')}>En</button>
      </form>
    </div>
  );
}
export default App;

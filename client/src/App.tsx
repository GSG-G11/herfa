import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(lang);
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="container">
      {t('title')}
      <form>
        <button
          type="button"
          onClick={() => setLang(i18n.language === 'ar' ? 'en' : 'ar')}
        >
          {i18n.language === 'ar' ? 'English' : 'العربية'}
        </button>
      </form>
    </div>
  );
}
export default App;

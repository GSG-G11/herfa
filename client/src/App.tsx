import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import {
  Home,
  Profile,
  Search,
  SignUp,
  LogIn,
  NotFound,
} from './Pages';

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
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:userName" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

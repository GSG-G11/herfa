import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import {
  Home,
  Profile,
  Search,
  SignUp,
  LogIn,
  NotFound,
} from './Pages';
import './App.css';
import 'antd/dist/antd.css';
import ServiceLocationContext from './Context/ServiceLocationContext';
import LoggedUserInfoProvider from './Context/LoggedUserContext';

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(lang);
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LoggedUserInfoProvider>
      <ConfigProvider direction={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div>
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
              <Route path="/" element={<ServiceLocationContext><Home /></ServiceLocationContext>} />
              <Route path="/user/:id" element={<Profile />} />
              <Route path="/search" element={<Search />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </ConfigProvider>
    </LoggedUserInfoProvider>
  );
}
export default App;

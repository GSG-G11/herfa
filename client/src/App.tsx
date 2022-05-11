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
import Nav from './Components/NavBar';

function App() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(lang);
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LoggedUserInfoProvider>
      <ConfigProvider direction={lang === 'ar' ? 'rtl' : 'ltr'}>
        <Router>
          <Nav language={lang} setLanguage={setLang} />
          <Routes>
            <Route path="/" element={<ServiceLocationContext><Home /></ServiceLocationContext>} />
            <Route path="/user/:userName" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ConfigProvider>
    </LoggedUserInfoProvider>
  );
}
export default App;

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
import { Nav } from './Components';
import Layout from './Pages/Layout';

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
          <Routes>
            <Route path="/" element={<ServiceLocationContext><Layout language={lang} setLanguage={setLang} /></ServiceLocationContext>}>
              <Route index element={<Home />} />
              <Route path="/user/:userName" element={<Profile />} />
              <Route path="/search" element={<Search />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route element={<Nav language={lang} setLanguage={setLang} />}>
              <Route path="/login" element={<LogIn />} />
            </Route>
          </Routes>
        </Router>
      </ConfigProvider>
    </LoggedUserInfoProvider>
  );
}
export default App;

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Routes, Route, BrowserRouter as Router,
} from 'react-router-dom';
import { ConfigProvider } from 'antd';
import {
  Home,
  Profile,
  Search,
  SignUp,
  LogIn,
  NotFound,
  AuthLayout,
  FooterLayout,
} from './Pages';
import './App.css';
import 'antd/dist/antd.css';
import { ServiceLocationContext, LoggedUserInfoProvider } from './Context';

function App() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(lang);
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.title = lang === 'en' ? 'Herfa' : 'حرفة';
  }, [lang]);

  return (
    <LoggedUserInfoProvider>
      <ServiceLocationContext>
        <ConfigProvider direction={lang === 'ar' ? 'rtl' : 'ltr'}>
          <Router>
            <Routes>
              <Route path="/" element={<FooterLayout language={lang} setLanguage={setLang} />}>
                <Route index element={<Home />} />
                <Route path="/user/:id" element={<Profile />} />
                <Route path="/search" element={<Search />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route element={<AuthLayout lang={lang} setLang={setLang} />}>
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
              </Route>
            </Routes>
          </Router>
        </ConfigProvider>
      </ServiceLocationContext>
    </LoggedUserInfoProvider>
  );
}
export default App;

import React, { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Routes, Outlet, Route, BrowserRouter as Router, useNavigate,
} from 'react-router-dom';
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
import { Nav, Footer } from './Components';
import LoggedUserInfoProvider, { UserContext } from './Context/LoggedUserContext';
import Layout from './Pages/Layout';

function AuthLayout({ lang, setLang }: any) {
  const navigate = useNavigate();
  const userInfo: any = useContext(UserContext);
  return (
    <>
      <Nav language={lang} setLanguage={setLang} />
      <Footer language={lang} />
      <Outlet />
      {userInfo?.user.providerID ? (<>{navigate(`/user/${userInfo?.user.providerID}`)}</>) : <Outlet />}
    </>
  );
}

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
      <ServiceLocationContext>
        <ConfigProvider direction={lang === 'ar' ? 'rtl' : 'ltr'}>
          <Router>
            <Routes>
              <Route path="/" element={<Layout language={lang} setLanguage={setLang} />}>
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

import React, { useContext } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../Context';
import Nav from '../../Components/Common/NavBar';

function AuthLayout({ lang, setLang }: any) {
  const navigate = useNavigate();
  const userInfo: any = useContext(UserContext);
  return (
    <>
      <Nav language={lang} setLanguage={setLang} />
      {userInfo?.user.providerID ? (<>{navigate(`/user/${userInfo?.user.providerID}`)}</>) : <Outlet />}
    </>
  );
}

export default AuthLayout;

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogInPage } from '../Components';
import { UserContext } from '../Context/LoggedUserContext';

function LogIn() {
  const navigate = useNavigate();
  const userInfo: any = useContext(UserContext);
  return (userInfo?.user.providerID ? (<>{navigate(`/user/${userInfo?.user.providerID}`)}</>) : <LogInPage />);
}

export default LogIn;

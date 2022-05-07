import React, { useState, useEffect, createContext } from 'react';
import Cookies from 'js-cookie';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { LoggedUser } from '../utils';

export const UserContext = createContext({});

function LoggedUserInfoProvider(props:any) {
  const { children } = props;
  const [user, setUser] = useState<any>();
  useEffect(() => {
    const token: string | undefined = Cookies.get('token');
    if (token) {
      const decoded: LoggedUser = jwt_decode(token);
      setUser(decoded);
    }
  }, []);
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export default LoggedUserInfoProvider;

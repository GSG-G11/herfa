import React, {
  useState, useEffect, createContext, useMemo,
} from 'react';
import Cookies from 'js-cookie';
import JWT from 'jwt-decode';
import { LoggedUser } from '../utils';

export const UserContext = createContext({});

function LoggedUserInfoProvider(props:any) {
  const { children } = props;
  const [user, setUser] = useState<any>({});
  useEffect(() => {
    const token: string | undefined = Cookies.get('token');
    if (token) {
      const decoded: LoggedUser = JWT(token);
      setUser(decoded);
    }
  }, []);
  const values = useMemo(() => ({
    user,
    setUser,

  }), [user, setUser]);
  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  );
}

export default LoggedUserInfoProvider;

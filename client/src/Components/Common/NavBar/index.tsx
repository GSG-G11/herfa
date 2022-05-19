import React, { useContext } from 'react';
import {
  Menu, Layout, Button, Dropdown, Image, MenuProps, message,
} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { UserContext } from '../../../Context';
import { NavBarProps, request } from '../../../utils';
import './style.css';

const { Header } = Layout;

function Nav({ language, setLanguage }: NavBarProps) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { user: userData, setUser }: any = useContext(UserContext);
  const navBarItems: MenuProps['items'] = [
    {
      label: t('home'),
      key: '/',
    },
    {
      label: t('search'),
      key: '/search',
    },
  ];
  const subMenuItems: MenuProps['items'] = [
    {
      label: t('profile'),
      key: `/user/${userData?.providerID}`,
    },
    {
      label: t('logout'),
      key: '/',
    },
  ];
  const handelLogOut = async () => {
    try {
      await request('get', '/logout');
      setUser({});
      message.success(t('log-out'));
    } catch {
      setUser({});
    }
  };
  const menu = (
    <Menu
      items={subMenuItems}
      onClick={({
        key,
      }) => { if (key === '/') handelLogOut(); navigate(key); }}
    />
  );

  let authItems:{} = <Link to="/login"><Button type="primary">{ t('login') }</Button></Link>;
  if (userData.providerID) {
    authItems = (
      <Dropdown.Button
        icon={<DownOutlined />}
        overlay={menu}
        onClick={() => navigate(`/user/${userData?.providerID}`)}
      >
        {userData?.providerName}
      </Dropdown.Button>
    );
  }

  return (
    <div className="nav-container">
      <Layout>
        <Header>
          <div className="logo"><Link to="/"><Image preview={false} src={language === 'ar' ? '/images/logo_ar.png' : '/images/logo_en.png'} alt="herfa logo" /></Link></div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['0']}
            items={navBarItems}
            onClick={({
              key,
            }) => navigate(key)}
          />
          <Button className="lang-btn" onClick={() => setLanguage(i18n.language === 'ar' ? 'en' : 'ar')}>
            {language === 'ar' ? 'En' : 'Ar'}
          </Button>
          {authItems}
        </Header>
      </Layout>
    </div>
  );
}
export default Nav;

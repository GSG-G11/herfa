// /* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import {
  Menu, Layout, Button, Dropdown, Image, MenuProps,
} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { UserContext } from '../../Context/LoggedUserContext';
import { NavBarProps } from '../../utils';
import logo from '../../assets/logo_ar.png';
import logoEn from '../../assets/logo_en.png';
import './style.css';

const { Header } = Layout;

function Nav({ language, setLanguage }: NavBarProps) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const userData: any = useContext(UserContext);
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
      key: '/logout',
    },
  ];
  const menu = (
    <Menu
      items={subMenuItems}
      onClick={({
        key,
      }) => navigate(key)}
    />
  );

  let authItems:{} = <Button type="primary">{ t('login') }</Button>;
  if (userData) {
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
          <div className="logo"><Link to="/"><Image preview={false} src={language === 'ar' ? logo : logoEn} alt="herfa logo" /></Link></div>
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
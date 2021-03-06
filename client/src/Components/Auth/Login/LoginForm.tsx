import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import {
  Form, Input, Button, message,
} from 'antd';
import axios from 'axios';
import { UserContext } from '../../../Context';
import { loginProps } from '../../../utils';

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location: any = useLocation();
  const { setUser }: any = useContext(UserContext);
  const onFinish = async (values: loginProps) => {
    try {
      setLoading(true);
      const loginResult = await axios.post('/api/v1/login', values);
      setLoading(false);
      const { id, providerName } = loginResult.data.data;
      const newLink = `/user/${id}`;
      setUser({ providerName, providerID: id });
      navigate(location.state?.from || newLink);
    } catch (err: any) {
      setLoading(false);
      if (err.response) {
        if (err.response.status === 401) {
          message.warning(t('failed-login'));
        } else if (err.response.status === 500) {
          message.warning(t('error-message'));
        } else if (err.response.status === 400) {
          message.warning(err.response.data.msg);
        }
      } else {
        message.warning(t('error-message'));
      }
    }
  };

  return (
    <div className="login-form">
      <h1 className="log-in-main-text">{t('login-title')}</h1>
      <Form
        className="login-form-body"
        layout="vertical"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={(e) => { onFinish(e); }}
        autoComplete="off"
      >
        <Form.Item
          label={t('login-email')}
          name="email"
          rules={[{ required: true, message: t('required-email') }, { type: 'email', message: t('invalid-email') }]}
        >
          <Input placeholder={t('log-in-email')} />
        </Form.Item>

        <Form.Item
          label={t('login-password')}
          name="password"
          rules={[{ required: true, message: t('required-password') }, { min: 8, message: t('invalid-password') }]}
        >
          <Input.Password placeholder={t('log-in-password')} />
        </Form.Item>
        <p>
          {`${t('login-signup-text')} `}
          <Link className="signup-text" to="/signup">{t('login-to-signup')}</Link>
        </p>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button className="form-button" type="primary" htmlType="submit" loading={loading}>
            {t('login-button')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;

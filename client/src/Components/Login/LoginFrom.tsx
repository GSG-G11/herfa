import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import {
  Form, Input, Button, message,
} from 'antd';
import axios from 'axios';
import { LoginFormType } from '../../utils';

interface loginProps {
  values: LoginFormType,
}

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location: any = useLocation();
  const onFinish = async (values: loginProps) => {
    try {
      setLoading(true);
      const loginResult = await axios.post('/api/v1/login', values);
      setLoading(false);
      const newLink = `/user/${loginResult.data.data.id}`;
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
      <h1>{t('login-title')}</h1>
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
          <Input />
        </Form.Item>

        <Form.Item
          label={t('login-password')}
          name="password"
          rules={[{ required: true, message: t('required-password') }, { min: 8, message: t('invalid-password') }]}
        >
          <Input.Password />
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

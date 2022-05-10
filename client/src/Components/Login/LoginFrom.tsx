import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  Form, Input, Button, message,
} from 'antd';
import axios from 'axios';
import { LoginFormType } from '../../utils';

interface loginProps {
  values: LoginFormType,
}

function LoginForm() {
  const navigate = useNavigate();
  const onFinish = async (values: loginProps) => {
    try {
      const loginResult = await axios.post('/api/v1/login', values);
      const newLink = `/user/${loginResult.data.data.providerName}`;
      message.success(loginResult.data.msg);
      navigate(newLink);
    } catch (err: any) {
      if (err.response) {
        if (err.response.status === 401) {
          message.warning('incorrect Email or Password ..');
        }
      } else {
        console.log(err);
      }
    }
  };
  const { t } = useTranslation();
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
        onFinish={(e) => { onFinish(e); }} // console to test here ...
        onFinishFailed={() => { console.log('faild submit...'); }} // console to test here ...
        autoComplete="off"
      >
        <Form.Item
          label={t('login-email')}
          name="email"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t('login-password')}
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item className="login-form-text">
          <p>{t('login-signup-text')}</p>
          <p className="signup-text">{t('login-to-signup')}</p>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button className="form-button" type="primary" htmlType="submit">
            {t('login-button')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;

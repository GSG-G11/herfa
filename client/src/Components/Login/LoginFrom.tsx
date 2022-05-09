import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Form, Input, Button,
} from 'antd';
import { LoginFormType } from '../../utils';

interface loginProps {
  values: LoginFormType,
}
function LoginForm() {
  const onFinish = (values: loginProps) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    };
    fetch('/api/v1/login', requestOptions)
      .then((data) => data.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
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

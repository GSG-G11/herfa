/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Form, Input, Button,
  message,
} from 'antd';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import './style.css';

function PersonalForm() {
  const { t } = useTranslation();
  const [userInfo, setUserInfo] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [hasFeedBack, setHasFeedBack] = useState(false);
  const handleChange = ({ target: { name, value } }:any) => {
    setUserInfo({ ...userInfo, [name]: value });
  };
  const register = async () => {
    setError('');
    setHasFeedBack(true);
    try {
      const { data } = await axios.post('/api/v1/signUp', userInfo);
      console.log(data);
    } catch (err:any) {
      if (err.response) {
        if (err.response.data.status === 500) {
          setError(t('error-message'));
        } else if (err.response.data.status === 400) {
          if (err.response.data.msg === '"email" is not allowed to be empty') {
            setError(t('required-email'));
          } else if (err.response.data.msg === '"email" must be a valid email') {
            setError(t('invalid-email'));
          } else {
            setError(t('Email-exists'));
          }
        }
      } else {
        message.warning(t('error-message'));
      }
    }
  };
  return (
    <div className="personal-form">
      <h1>{t('crate-account')}</h1>
      <Form
        className="Form-sign-up"
        name="register"
        // form={form}
        layout="vertical"
        autoComplete="off"
        onFinish={() => console.log('finish')}
      >
        <div className="name-input">
          <Form.Item
            label={t('First Name')}
            name="firstName"
            rules={[{ required: true, message: t('required-firstName') }]}
          >
            <Input onChange={handleChange} />
          </Form.Item>
          <Form.Item
            label={t('Last Name')}
            name="lastName"
            rules={[{ required: true, message: t('required-lastName') }]}
            className="firstNameInput"
          >
            <Input
              onChange={handleChange}
            />
          </Form.Item>
        </div>
        <Form.Item
          label={t('login-email')}
          name="email"
          hasFeedback={hasFeedBack}
          validateStatus={error ? 'error' : 'success'}
          help={error}
          rules={[{ required: true, message: t('required-email') }, { type: 'email', message: t('invalid-email') }]}
        >
          <Input
            onBlur={register}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          label={t('login-password')}
          name="password"
          rules={[{ required: true, message: t('required-password') }, { min: 8, message: t('invalid-password') }]}
        >
          <Input.Password onChange={handleChange} />
        </Form.Item>
        <Form.Item
          name="confirm"
          label={t('Confirm Password')}
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: t('required-confirmPassword'),
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t('notMatch-Password')));
              },
            }),
          ]}

        >
          <Input.Password />
        </Form.Item>
        <Form.Item className="next-btn">
          <Button type="primary" htmlType="submit">
            {t('Next')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default PersonalForm;

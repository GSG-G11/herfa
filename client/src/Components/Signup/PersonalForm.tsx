import React, { useState } from 'react';
import {
  Form, Input, Button,
  message,
} from 'antd';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import './style.css';

function PersonalForm({ next, setFirstForm }: any) {
  const { t } = useTranslation();
  const [error, setError] = useState('');
  const [hasFeedBack, setHasFeedBack] = useState(false);
  const emailCheck = async (e:React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setHasFeedBack(true);
    try {
      await axios.post('/api/v1/checkEmail', {
        email: e.target.value,
      });
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
        layout="vertical"
        autoComplete="off"
        onFinish={(values) => {
          next();
          setFirstForm(values);
        }}
      >
        <div className="name-input">
          <Form.Item
            label={t('First Name')}
            name="first_name"
            rules={[{ required: true, message: t('required-firstName') }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t('Last Name')}
            name="last_name"
            rules={[{ required: true, message: t('required-lastName') }]}
            className="firstNameInput"
          >
            <Input />
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
            onBlur={emailCheck}
          />
        </Form.Item>
        <Form.Item
          label={t('login-password')}
          name="password"
          rules={[{ required: true, message: t('required-password') }, { min: 8, message: t('invalid-password') }]}
        >
          <Input.Password />
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

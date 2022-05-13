import React, { useState } from 'react';
import {
  Form, Input, Button, message,
} from 'antd';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import './style.css';

function PersonalForm() {
  const [form] = Form.useForm();
  // console.log(form);
  const { t } = useTranslation();
  const [userInfo, setUserInfo] = useState({ email: '' });
  const [error, setError] = useState('');
  const [hasFeedBack, setHasFeedBack] = useState(false);
  // const [errorVerify, setErrorVerify] = useState('');
  // const [userPass, setUserPass] = useState('');
  const handleChange = ({ target: { name, value } }:any) => {
    setUserInfo({ ...userInfo, [name]: value });
  };
  // const verifyPassword = (confirmPass:any) => {
  //   if (confirmPass !== userPass) {
  //     setErrorVerify(t('notMatch-Password'));
  //   }
  // };
  const register = async () => {
    setError('');
    if (userInfo.email === '') {
      setHasFeedBack(false);
      setError(t('required-email'));
      return;
    }
    setHasFeedBack(true);
    try {
      const { data } = await axios.post('/api/v1/signup', userInfo);
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

      // console.log(err.response.data.msg);
    }
  };
  return (
    <div className="personal-form">
      <Form
        className="Form-sign-up"
        name="register"
        form={form}
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <div className="name-input">
          <Form.Item
            label={t('First Name')}
            name="firstName"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t('Last Name')}
            className="firstNameInput"
          >
            <Input
              placeholder={t('Last Name')}
              name="lastName"
              onChange={(e) => handleChange(e)}
              required

            />
          </Form.Item>
        </div>
        <Form.Item
          label={t('Email')}
          hasFeedback={hasFeedBack}
          validateStatus={error ? 'error' : 'success'}
          help={error}
          rules={[{ required: true, message: t('required-email') }, { type: 'email', message: t('invalid-email') }]}
        >
          <Input
            // type="email"
            onBlur={register}
            placeholder={t('Email')}
            name="email"
            onChange={(e) => handleChange(e)}
            required
          />
        </Form.Item>
        <Form.Item
          label={t('Password')}
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          // help={errorVerify}
          // validateStatus={error ? 'error' : 'success'}
          label={t('Confirm Password')}
          name="confirmPassword"

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

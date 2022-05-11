import React, { useState } from 'react';
import {
  Form, Input, Button,
} from 'antd';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import './style.css';

function PersonalForm() {
  const { t } = useTranslation();
  const [userInfo, setUserInfo] = useState({
    // firstName: '', lastName: '',
    email: '',
    // password: '', confirmPassword: '',
  });
  const handleChange = ({ target: { name, value } }:any) => {
    setUserInfo({ ...userInfo, [name]: value });
  };
  const register = async () => {
    try {
      const data = await axios.post('/api/v1/signup', userInfo);
      console.log(data);
      // { response: { data: { message: errorMessage } } }
    } catch (err) {
      // message.error({
      //   content: errorMessage,
      // });
      console.log(err);
    }
  };
  return (
    <div className="personal-form">
      <Form
        className="Form-sign-up"
        name="register"
        onFinish={register}
      >
        <div className="name-input">
          <Form.Item label={t('First Name')}>
            <Input placeholder={t('First Name')} name="firstName" onChange={(e) => handleChange(e)} />
          </Form.Item>
          <Form.Item label={t('Last Name')} className="firstNameInput">
            <Input placeholder={t('Last Name')} name="lastName" onChange={(e) => handleChange(e)} />
          </Form.Item>
        </div>
        <Form.Item label={t('Email')}>
          <Input placeholder={t('Email')} name="email" onChange={(e) => handleChange(e)} />
        </Form.Item>
        <Form.Item label={t('Password')}>
          <Input placeholder={t('Password')} name="password" onChange={(e) => handleChange(e)} />
        </Form.Item>
        <Form.Item label={t('Confirm Password')}>
          <Input placeholder={t('Confirm Password')} name="confirmPassword" onChange={(e) => handleChange(e)} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {t('Next')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default PersonalForm;

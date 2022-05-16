/* eslint-disable prefer-regex-literals */
/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './style.css';
import {
  Form, Input, Button, Select, message,
} from 'antd';
import axios from 'axios';
import { ServiceLocation } from '../../Context/ServiceLocationContext';
import { serviceObject, request } from '../../utils';
// import ErrorComponent from '../Error';

function ServicesForm({ firstForm, prev }:any) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const Location: any = useLocation();

  const [subServices, setSubServices] = useState<serviceObject[]>([]);
  const [subService, setSubService] = useState<number[]>([]);
  const [error, setError] = useState('');
  const [mainServiceId, setMainServiceId] = useState(0);
  const [hasFeedBack, setHasFeedBack] = useState(false);

  const { Option } = Select;
  const { data: { location, services } } = useContext(ServiceLocation);
  const onFinish = async (values:React.ChangeEvent<HTMLInputElement>) => {
    const finalData = { ...firstForm, ...values };
    try {
      const data = await axios.post('/api/v1/signup', finalData);
      if (data) {
        const newLink = `/providers/${data.data.data.id}`;
        navigate(Location.state?.from || newLink);
      }
    } catch (err:any) {
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
  const checkphone = async (e:React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setHasFeedBack(true);
    if (e.target.value.length !== 10 && e.target.value.length > 0) {
      setError(t('invalid-phone'));
    } else {
      try {
        await axios.post('/api/v1/checkphone', { phone: e.target.value });
      } catch (err:any) {
        if (err.response) {
          if (err.response.data.status === 500) {
            setError(t('error-message'));
          } else if (err.response.data.status === 400) {
            if (err.response.data.msg === '"phone" is not allowed to be empty') {
              setError(t('required-phone'));
            } else if (err.response.data.msg === '"phone" must be a valid phone') {
              setError(t('invalid-phone'));
            } else {
              setError(t('phone-exists'));
            }
          }
        } else {
          message.warning(t('error-message'));
        }
      }
    }
  };
  const getSubServicesData = async () => {
    try {
      setError('');
      const { data } : any = await request('get', `/subservices/${+mainServiceId}`);
      setSubServices(data);
    } catch (responseError: any) {
      setError(responseError.data.msg);
    }
  };
  const handelSelectMainService = async (service: number) => {
    setSubService([]);
    setMainServiceId(service);
  };
  useEffect(() => {
    if (mainServiceId) getSubServicesData();
  }, [mainServiceId]);

  return (
    <div className="personal-form">
      <Form
        className="Form-sign-up"
        name="register"
        layout="vertical"
        onFinish={onFinish}
      >
        <div className="name-input">
          <Form.Item
            label={t('phone-number')}
            name="phone"
            hasFeedback={hasFeedBack}
            validateStatus={error ? 'error' : 'success'}
            help={error}
            rules={[
              { required: true, message: t('required-phone') },
              {
                pattern: new RegExp(/^\d{10}$/), message: t('invalid-phone'),
              }]}
          >
            <Input
              placeholder={t('phone-number')}
              onBlur={checkphone}
            />
          </Form.Item>
          <Form.Item
            label={t('whats-app')}
            className="firstNameInput"
            name="whatsapp"
            rules={[{ required: true, message: t('required-whatsapp') },
              { pattern: new RegExp(/^\d{14}$/), message: t('invalid-whatsapp') },
            ]}
          >
            <Input placeholder={t('whats-app')} />
          </Form.Item>
        </div>
        <Form.Item
          label={t('services-category')}
          name="mainServiceId"
          rules={[{ required: true, message: t('required-service') }]}

        >
          <Select
            placeholder={t('service')}
            className="filter-inputs"
            allowClear
            onChange={(service: number) => {
              handelSelectMainService(service);
            }}
          >
            {services.map((item: serviceObject) => (
              <Option key={item.name} value={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>

        </Form.Item>
        <Form.Item
          name="subservice"
          label={t('services')}
        >
          <Select
            mode="multiple"
            allowClear
            className="filter-inputs"
            placeholder={t('subService')}
            disabled={!mainServiceId}
            value={subService}
            onChange={
                (data : number[]) => {
                  setSubService(data);
                }
            }
          >
            {subServices.map((item: serviceObject) => (
              <Option key={item.name} value={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="locationId"
          label={t('location')}
          rules={[{ required: true, message: t('required-location') }]}
        >
          <Select
            size="large"
            showSearch
            placeholder={t('home-search-specific-location')}
            optionFilterProp="children"
          >
            {location.map(
              (item) => <Option value={item.id} key={item.city}>{item.city}</Option>,
            )}
          </Select>
        </Form.Item>
        <Form.Item
          label={t('biography')}
          name="description"
          rules={[{ required: true, message: t('required-description') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item className="next-btn">
          <Button type="primary" htmlType="submit">
            {t('create-account-button')}
          </Button>
          <Button style={{ margin: '0 3px' }} onClick={() => prev()}>
            {t('previous-button')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default ServicesForm;

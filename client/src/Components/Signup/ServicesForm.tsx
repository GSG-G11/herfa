/* eslint-disable import/no-unresolved */
import React, { useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';
import {
  Form, Input, Button, Select,
} from 'antd';
// import { MaskedInput } from 'antd-mask-input';
import { ServiceLocation } from '../../Context/ServiceLocationContext';
import { serviceObject, request } from '../../utils';
import ErrorComponent from '../Error';

// 'phone-number': 'Phone Number',
// 'whats-app': 'Whats app',
// 'services-category': 'Services Category',
// services: 'Services',
// location: 'Location',
// biography: 'Biography',
// 'create-account-button': 'Create Account',

function ServicesForm(firstData:any) {
  const { t } = useTranslation();
  const [subServices, setSubServices] = useState<serviceObject[]>([]);
  const [subService, setSubService] = useState<number[]>([]);
  // const [searchValueFromInput, setSearchValueFromInput] = useState();
  const [error, setError] = useState('');
  const [mainServiceId, setMainServiceId] = useState(0);

  const { Option } = Select;
  const { data: { location, services } } = useContext(ServiceLocation);

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
      {error && <ErrorComponent errorMessage={error} />}
      <Form
        className="Form-sign-up"
        name="register"
        layout="vertical"
        onFinish={(e:any) => {
          const finalData = { ...e, ...firstData };
          console.log(finalData);
        }}
      >
        <div className="name-input">
          <Form.Item
            label={t('phone-number')}
            name="phoneNunmber"
            rules={[{ required: true, message: t('required-phone') },
              {
                // eslint-disable-next-line prefer-regex-literals
                pattern: new RegExp(/^\d{10}$/), message: t('invalid-phone'),
              }]}
          >
            <Input placeholder={t('phone-number')} />
            {/* <MaskedInput mask="0000 000000" /> */}
          </Form.Item>
          <Form.Item
            label={t('whats-app')}
            className="firstNameInput"
            name="whatsapp"
            rules={[{ required: true, message: t('invalid-phone') },
              // eslint-disable-next-line prefer-regex-literals
              { pattern: new RegExp(/^\d{10}$/), message: t('invalid-phone') },
            ]}
          >
            <Input placeholder={t('whats-app')} />
          </Form.Item>
        </div>
        <Form.Item
          label={t('services-category')}
          // hasFeedback
          // rules={[{ required: true, message: 'services-category' }]}
          rules={[{ required: true, message: 'Please select a image' }]}

        >
          {/* <Input id="error2" placeholder={t('services-category')}
           name="services-category" /> */}
          <Select
            placeholder={t('service')}
            className="filter-inputs"
            allowClear
            onChange={(service: number) => {
              handelSelectMainService(service);
              console.log(mainServiceId);
            }}
          >
            {services.map((item: serviceObject) => (
              <Option key={item.name} value={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>

        </Form.Item>
        <Form.Item label={t('services')}>
          {/* <Input placeholder={t('services')} name="services" /> */}
          <Select
            mode="multiple"
            allowClear
            className="filter-inputs"
            placeholder={t('subService')}
            disabled={!mainServiceId}
            value={subService}
            onChange={(data : number[]) => setSubService(data)}
          >
            {subServices.map((item: serviceObject) => (
              <Option key={item.name} value={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label={t('location')}>
          {/* <Input name="Location" /> */}
          <Select
            size="large"
            showSearch
        // className="select-location-home-page"
            placeholder={t('home-search-specific-location')}
            optionFilterProp="children"
            onSelect={(citySearched: any) => console.log(citySearched)}
          >
            {location.map(
              (item) => <Option value={item.id} key={item.city}>{item.city}</Option>,
            )}
          </Select>
        </Form.Item>
        <Form.Item label={t('biography')}>
          <Input name="biography" />
        </Form.Item>
        <Form.Item className="next-btn">
          <Button type="primary" htmlType="submit">
            {t('create-account-button')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default ServicesForm;

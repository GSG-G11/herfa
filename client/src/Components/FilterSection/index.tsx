import React, { useContext, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { Input, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import './style.css';
import { ServiceLocation } from '../../Context/ServiceLocationContext';
import { locationObject, serviceObject, request } from '../../utils';

function FilterSection() {
  const { t } = useTranslation();
  // const locationData = useLocation();
  // const search : any = locationData.state;
  // const { serviceSearch, locationSearch, craftsmanSearch } = search;

  const [selectMainService, setMainService] = useState(true);
  const [subServices, setSubServices] = useState<serviceObject[]>([]);
  const { data: { location, services } } = useContext(ServiceLocation);
  const { Option } = Select;

  const handelSelectMainService = async (service: number) => {
    setMainService(!selectMainService);
    const { data } : any = await request('get', `/subservices/${service}`);
    setSubServices(data);
  };

  return (
    <div className="filter-container">
      <h2 className="filter-main-text">{t('filter-heading')}</h2>
      <span className="filter-input-text">{t('home-search-name')}</span>
      <Input placeholder={t('search-name')} className="filter-inputs" />

      <span className="filter-input-text">{t('search-by-main-service')}</span>
      <Select
        placeholder={t('service')}
        className="filter-inputs"
        onSelect={(service: number) => handelSelectMainService(service)}
      >
        {services.map((item: serviceObject) => (
          <Option key={item.name} value={item.id}>
            {item.name}
          </Option>
        ))}
      </Select>

      <span className="filter-input-text">{t('search-by-sub-service')}</span>
      <Select
        mode="multiple"
        allowClear
        className="filter-inputs"
        placeholder={t('subService')}
        disabled={selectMainService}
      >
        {subServices.map((item: serviceObject) => (
          <Option key={item.name} value={item.id}>
            {item.name}
          </Option>
        ))}
      </Select>

      <span className="filter-input-text">{t('home-search-location')}</span>
      <Select placeholder={t('city')} className="filter-inputs">
        {location.map((item: locationObject) => (
          <Option key={item.city} value={item.id}>
            {item.city}
          </Option>
        ))}
      </Select>
    </div>
  );
}

export default FilterSection;

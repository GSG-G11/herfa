import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Input, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import ErrorComponent from '../Error';
import { ServiceLocation } from '../../Context/ServiceLocationContext';
import './style.css';
import {
  locationObject,
  serviceObject,
  request,
  FilterSearchProps,
  SearchResponse,
  Event,
} from '../../utils';

function FilterSection(
  {
    setUsers,
    setSearchError,
    setIsLoading,
    setResultCount,
    setPage,
    page,
  }: FilterSearchProps,
) {
  const { t } = useTranslation();
  const locationData = useLocation();
  const [mainServiceId, setMainServiceId] = useState(0);
  const [subService, setSubService] = useState<number[]>([]);
  const [error, setError] = useState('');
  const [subServices, setSubServices] = useState<serviceObject[]>([]);
  const [name, setName] = useState<string>('');
  const [locationInput, setLocationInput] = useState<number>();
  const search : any = locationData.state;
  const { serviceSearch, locationSearch } = search;
  const { data: { location, services } } = useContext(ServiceLocation);
  const { Option } = Select;
  const getSearchResults = async (queryString: string) => {
    try {
      setSearchError('');
      const searchResult : SearchResponse = await request('get', `/provider?${queryString}`);
      setIsLoading(false);
      setResultCount(searchResult.count);
      setUsers(searchResult.data);
    } catch (responseError: any) {
      setSearchError(responseError.data.msg);
    }
  };
  const getSubServicesData = async () => {
    try {
      setError('');
      const { data } : any = await request('get', `/subservices/${+mainServiceId || serviceSearch}`);
      setSubServices(data);
    } catch (responseError: any) {
      setError(responseError.data.msg);
    }
  };
  const handelSelectMainService = async (service: number) => {
    setSubService([]);
    setMainServiceId(service);
    setPage(1);
  };
  const handelNameInputChange = async (e: Event) => {
    setName(e.target.value);
    setPage(1);
  };
  const handelLocationInput = async (e: number) => {
    setLocationInput(e);
    setPage(1);
  };
  useEffect(() => {
    let queryString = '';
    if (serviceSearch) {
      queryString += `&service=${serviceSearch}`;
    }
    if (locationSearch) {
      queryString += `&location=${locationSearch}`;
    }
    if (page !== 1) {
      queryString += `&page=${page}`;
    }
    if (queryString) {
      getSearchResults(queryString);
    }
  }, []);
  useEffect(() => {
    let queryString = '';
    if (mainServiceId) {
      queryString += `&service=${mainServiceId}`;
    }
    if (subService.length) {
      queryString += `&subservice=${subService.join(',')}`;
    }
    if (name) {
      queryString += `&name=${name}`;
    }
    if (locationInput) {
      queryString += `&location=${locationInput}`;
    }
    if (page !== 1) {
      queryString += `&page=${page}`;
    }
    if (queryString) {
      getSearchResults(queryString);
    }
  }, [mainServiceId, subService, locationInput, name, page]);
  useEffect(() => {
    if (mainServiceId || serviceSearch) getSubServicesData();
  }, [mainServiceId, serviceSearch]);

  return (
    <div className="filter-container">
      {error && <ErrorComponent errorMessage={error} />}
      <h2 className="filter-main-text">{t('filter-heading')}</h2>
      <div className="filter-options">
        <span className="filter-input-text">{t('home-search-name')}</span>
        <Input placeholder={t('search-name')} className="filter-inputs" onChange={(e: Event) => handelNameInputChange(e)} />
        <span className="filter-input-text">{t('search-by-main-service')}</span>
        <Select
          placeholder={t('service')}
          className="filter-inputs"
          defaultValue={serviceSearch}
          onChange={(service: number) => handelSelectMainService(service)}
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

        <span className="filter-input-text">{t('home-search-location')}</span>
        <Select placeholder={t('city')} className="filter-inputs" onChange={(e:number) => handelLocationInput(e)} defaultValue={locationSearch}>
          {location.map((item: locationObject) => (
            <Option key={item.city} value={item.id}>
              {item.city}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
}

export default FilterSection;

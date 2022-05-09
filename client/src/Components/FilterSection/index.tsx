import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Input, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import ErrorComponent from '../Error';
import { ServiceLocation } from '../../Context/ServiceLocationContext';
import getSearchResults from '../../Controllers';
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
  const { data: { location, services } } = useContext(ServiceLocation);
  const { Option } = Select;
  const getSubServicesData = async () => {
    try {
      setError('');
      const { data } : any = await request('get', `/subservices/${+mainServiceId || search?.serviceSearch}`);
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
  const onSuccess = (data: SearchResponse) => {
    setSearchError('');
    setIsLoading(false);
    setResultCount(data.count);
    setUsers(data.data);
  };
  const onFailed = (errors: any) => {
    setSearchError(errors.data.msg);
    setIsLoading(false);
  };
  const isLoading = () => {
    setIsLoading(true);
  };
  useEffect(() => {
    let queryString = '';
    const serviceQuery = mainServiceId || search?.serviceSearch;
    const locationQuery = locationInput || search?.locationSearch;
    if (serviceQuery) {
      queryString += `&service=${serviceQuery}`;
    }
    if (subService.length) {
      queryString += `&subservice=${subService.join(',')}`;
    }
    if (name) {
      queryString += `&name=${name}`;
    }
    if (locationQuery) {
      queryString += `&location=${locationQuery}`;
    }
    queryString += `&page=${page}`;
    getSearchResults(queryString, onSuccess, onFailed, isLoading);
  }, [mainServiceId, subService, locationInput, name, page]);
  useEffect(() => {
    if (mainServiceId || search?.serviceSearch) getSubServicesData();
  }, [mainServiceId, search?.serviceSearch]);

  return (
    <div className="filter-container">
      {error && <ErrorComponent errorMessage={error} />}
      <h2 className="filter-main-text">{t('filter-heading')}</h2>
      <div className="filter-options">
        <span className="filter-input-text">{t('home-search-name')}</span>
        <Input
          placeholder={t('search-name')}
          className="filter-inputs"
          allowClear
          onChange={(e: Event) => handelNameInputChange(e)}
        />
        <span className="filter-input-text">{t('search-by-main-service')}</span>
        <Select
          placeholder={t('service')}
          className="filter-inputs"
          defaultValue={search?.serviceSearch}
          allowClear
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
          disabled={!mainServiceId && !search?.serviceSearch}
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
        <Select
          placeholder={t('city')}
          className="filter-inputs"
          allowClear
          onChange={(e:number) => handelLocationInput(e)}
          defaultValue={search?.locationSearch}
        >
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

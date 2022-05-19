import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ServiceLocation } from '../../Context/ServiceLocationContext';
import './style.css';

function SearchButton() {
  const { t } = useTranslation();
  const { data: { location } } = useContext(ServiceLocation);
  const { Option } = Select;
  const [searchValueFromInput, setSearchValueFromInput] = useState();

  return (
    <div>
      <Select
        size="large"
        showSearch
        onSelect={(citySearched: any) => setSearchValueFromInput(citySearched)}
        className="select-location-home-page"
        placeholder={t('home-search-specific-location')}
        optionFilterProp="children"
      >
        {location.map(
          (item) => <Option value={item.id} key={item.city}>{t(item.city)}</Option>,
        )}
      </Select>
      <Button size="large" type="primary" icon={<SearchOutlined />}>
        <Link to="/search" state={{ locationSearch: searchValueFromInput }}>
          <span className="search-link">{t('home-search-word')}</span>
        </Link>
      </Button>
    </div>
  );
}

export default SearchButton;

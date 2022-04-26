import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './style.css';

interface SearchButtonProps {
  location: {
        city:string,
    }[]
}

function SearchButton({ location }: SearchButtonProps) {
  const { t } = useTranslation();
  const { Option } = Select;
  const [searchValueFromInput, setSearchValueFromInput] = useState('');
  return (
    <div>
      <Select
        size="large"
        showSearch
        onSelect={(citySearched: string) => setSearchValueFromInput(citySearched)}
        style={{ width: 200 }}
        placeholder={t('home-search-specific-location')}
        optionFilterProp="children"
      >
        {location.map(
          (item) => <Option value={item.city} key={item.city}>{item.city}</Option>,
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

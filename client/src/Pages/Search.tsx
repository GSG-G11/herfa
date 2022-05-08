import React, { useState } from 'react';
import { Empty } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  FilterSection, UserCard, SpinierComponent, ErrorComponent,
} from '../Components';
import ServiceLocationContext from '../Context/ServiceLocationContext';
import { UserData } from '../utils';

function Search() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [searchError, setSearchError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [resultCount, setResultCount] = useState<number>(1);
  const iff = (condition :any, then :any, otherwise :any) => (condition ? then : otherwise);
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="search-results-container">
        <ServiceLocationContext>
          <FilterSection
            setUsers={setUsers}
            setSearchError={setSearchError}
            setIsLoading={setIsLoading}
            setResultCount={setResultCount}
          />
        </ServiceLocationContext>
        <div className="user-cards-container">
          {isLoading ? <SpinierComponent /> : iff(
            !searchError,
            users.length ? (
              users.map((user: UserData) => <UserCard key={user.id} user={user} />)
            ) : (
              <Empty description={(<span>{t('no-data')}</span>)} />
            ),
            <ErrorComponent errorMessage={searchError} />,
          )}
          {console.log(resultCount)}
        </div>
      </div>
    </div>
  );
}

export default Search;

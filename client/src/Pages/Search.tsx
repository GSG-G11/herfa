import React, { useState } from 'react';
import { Empty, Pagination } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  FilterSection, UserCard, SpinierComponent, ErrorComponent,
} from '../Components';
import { UserData } from '../utils';

function Search() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [searchError, setSearchError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [resultCount, setResultCount] = useState<number>(1);
  const iff = (condition :any, then :any, otherwise :any) => (condition ? then : otherwise);
  const { t } = useTranslation();
  const handlePageChange = (PageNnm: number) => {
    setPage(PageNnm);
  };
  return (
    <div className="container">
      <div className="search-results-container">
        <FilterSection
          setUsers={setUsers}
          setSearchError={setSearchError}
          setIsLoading={setIsLoading}
          setResultCount={setResultCount}
          page={page}
          setPage={setPage}
        />
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
          <div className="pagination">
            {users.length ? (
              <Pagination
                defaultCurrent={1}
                onChange={handlePageChange}
                total={resultCount}
                defaultPageSize={5}
              />
            ) : ''}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;

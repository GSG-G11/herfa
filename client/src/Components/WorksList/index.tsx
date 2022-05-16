import { useTranslation } from 'react-i18next';
import React from 'react';
import { Pagination, Empty } from 'antd';
import WorkCard from '../WorkCard';
import { OnWork } from '../../utils';
import SpinierComponent from '../Spinier';
import ErrorComponent from '../Error';
import './style.css';

const iff = (condition :any, then :any, otherwise :any) => (condition ? then : otherwise);

function WorkList({
  worksData, page, handlePageChange, resultCount,
  isAuth, isLoading, error, updateWorks, deletedWork,
}:any) {
  const { t } = useTranslation();
  return (
    <div className="works-container">
      {isLoading ? <SpinierComponent /> : iff(
        !error,
        worksData?.length ? (
          <div className="work-card-container">
            { worksData?.map((work: OnWork) => (
              <WorkCard
                updateWorks={updateWorks}
                deletedWork={deletedWork}
                key={work?.id}
                work={work}
                isAuth={isAuth}
              />
            ))}
          </div>
        ) : (
          <Empty description={(<span>{t('no-data')}</span>)} />
        ),
        <ErrorComponent errorMessage={error} />,
      )}

      <div className="pagination">
        <Pagination
          defaultCurrent={page}
          onChange={handlePageChange}
          total={resultCount}
          defaultPageSize={5}
        />
      </div>
    </div>
  );
}

export default WorkList;

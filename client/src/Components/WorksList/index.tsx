import React from 'react';
import { Pagination, Empty } from 'antd';
import WorkCard from '../WorkCard';
import { OnWork, WorkListProps } from '../../utils';
import SpinierComponent from '../Spinier';
import ErrorComponent from '../Error';

const iff = (condition :any, then :any, otherwise :any) => (condition ? then : otherwise);

function WorkList({
  worksData, page, handlePageChange, resultCount, isAuth, isLoading, error,
}:WorkListProps) {
  return (
    <div className="works-container">
      {isLoading ? <SpinierComponent /> : iff(
        !error,
        worksData.length ? (
          <div className="work-card-container">
            { worksData?.map((work: OnWork) => (
              <WorkCard key={work?.id} work={work} isAuth={isAuth} />
            ))}
          </div>
        ) : (
          <Empty description={(<span>no-data</span>)} />
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

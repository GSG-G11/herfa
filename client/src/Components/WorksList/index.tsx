import React from 'react';
import { Pagination, Empty } from 'antd';
import WorkCard from '../WorkCard/WorkCard';
import { OnWork } from '../../utils';
import SpinierComponent from '../Spinier';
import ErrorComponent from '../Error';

const iff = (condition :any, then :any, otherwise :any) => (condition ? then : otherwise);

type Props = {
  worksData: OnWork[];
  page: number;
  handlePageChange: (page: number) => void;
  resultCount: number;
  isAuth: {isAuth: boolean};
  isLoading: boolean;
  error: string;
};
const act = {
  edit() {},
  setting() {},
};
function WorkList({
  worksData, page, handlePageChange, resultCount, isAuth, isLoading, error,
}:Props) {
  return (
    <div className="works-container">
      {isLoading ? <SpinierComponent /> : iff(
        !error,
        worksData.length ? (
          <div className="work-card-container">
            { worksData?.map((work: OnWork) => (
              <WorkCard key={work?.id} work={work} actions={act} isAuth={isAuth} />
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

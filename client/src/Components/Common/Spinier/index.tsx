import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './style.css';

function SpinierComponent() {
  return (
    <div className="spinier-loading">
      <Spin indicator={<LoadingOutlined className="spinier" spin />} />
    </div>
  );
}

export default SpinierComponent;

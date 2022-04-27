import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './style.css';

function SpinierComponent() {
  return (
    <Spin indicator={<LoadingOutlined className="spinier" spin />} />
  );
}

export default SpinierComponent;

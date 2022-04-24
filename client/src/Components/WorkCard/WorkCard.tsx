import React from 'react';
import { Card } from 'antd';
import './work.css';
import { EditOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
interface WorkCardProps {
  work: {
    title: string;
    content: string;
    image: string;
    userId: number;
  };
}

function WorkCard({ work }: WorkCardProps) {
  return (

    <Card
      className="work-card"
      hoverable
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
      ]}
      cover={<img alt="example" src={work.image} />}
    >
      <Meta
        className="work-card-body"
        title={work.title}
        description={work.content}
      />
    </Card>

  );
}

export default WorkCard;

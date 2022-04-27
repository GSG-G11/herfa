import React from 'react';
import { Card } from 'antd';
import './style.css';
import { EditOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
interface WorkCardProps {
  work: {
    title: string;
    content: string;
    image: string;
    userId: number;
  };
  actions: {
    edit: () => void;
    setting: () => void;
  };
  isAuth: {
    isAuth: boolean;
  }
}

function WorkCard({ work, actions, isAuth }: WorkCardProps) {
  return (

    <Card
      className="work-card"
      hoverable
      actions={isAuth.isAuth ? [
        <SettingOutlined onClick={actions?.edit} key="setting" />,
        <EditOutlined onClick={actions?.setting} key="edit" />,
      ] : []}
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

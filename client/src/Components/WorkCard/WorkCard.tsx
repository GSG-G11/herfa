import React, { useState } from 'react';
import {
  Card, message, Popconfirm, Modal,
} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { WorkCardProps } from '../../utils';
import './style.css';

const { Meta } = Card;

function WorkCard({ work, actions, isAuth }: WorkCardProps) {
  const { t } = useTranslation();
  const [isClickEdit, setIsClickEdit] = useState(false);

  const handelDelete = () => {
    actions.delete(work.id);
    const key = 'deleted';
    message.loading({ content: t('successfully-delete-load'), key });
    setTimeout(() => {
      message.success({ content: t('successfully-delete'), key, duration: 2 });
    }, 1000);
  };
  const handelEdit = () => {
    setIsClickEdit(true);
    actions.edit(work.id);
  };
  const handelCancelEdit = () => {
    setIsClickEdit(false);
  };

  return (
    <>
      <Card
        className="work-card"
        hoverable
        actions={isAuth.isAuth ? [
          <Popconfirm
            title={t('delete-message-1')}
            onConfirm={handelDelete}
            okText={t('ok-button')}
            cancelText={t('cancel-button')}
          >
            <DeleteOutlined key="delete" />
          </Popconfirm>,
          <EditOutlined onClick={handelEdit} key="edit" />,
        ] : []}
        cover={<img alt="example" src={work.image} />}
      >
        <Meta
          className="work-card-body"
          title={work.title}
          description={work.content}
        />
      </Card>
      <Modal title="Edit Work" visible={isClickEdit} onOk={() => console.log('ok is clicked edit')} onCancel={handelCancelEdit}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default WorkCard;

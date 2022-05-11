import React, { useState } from 'react';
import {
  Card, message, Popconfirm, Modal,
} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { WorkCardProps, request } from '../../utils';
import './style.css';

const { Meta } = Card;

function WorkCard({ work, isAuth }: WorkCardProps) {
  const { t } = useTranslation();
  const [isClickEdit, setIsClickEdit] = useState(false);

  const handelDelete = async () => {
    try {
      const result = await request('delete', `/work/${`${work.id}`}`);
      if (result.msg === 'work deleted successfully') message.success(t('successfully-delete'));
    } catch (error: any) {
      if (error) message.error(t('error-delete-message'));
    }
  };

  const handelEdit = () => {
    setIsClickEdit(true);
    // actions.edit(work.id);
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
      <Modal title="Edit Work" visible={isClickEdit} onOk={() => {}} onCancel={handelCancelEdit}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default WorkCard;

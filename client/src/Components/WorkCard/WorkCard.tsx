import React, { useState } from 'react';
import { Card, Modal, message } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { WorkCardProps } from '../../utils';
import './style.css';

const { Meta } = Card;

function WorkCard({ work, actions, isAuth }: WorkCardProps) {
  const { t } = useTranslation();
  const [isClickDelete, setIsClickDelete] = useState(false);
  const [isClickEdit, setIsClickEdit] = useState(false);

  const handelDelete = () => {
    actions.delete(work.id);
    setIsClickDelete(false);
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
  const handelCancel = () => {
    if (setIsClickDelete) setIsClickDelete(false);
    if (setIsClickEdit) setIsClickEdit(false);
  };

  return (
    <>
      <Card
        className="work-card"
        hoverable
        actions={isAuth.isAuth ? [
          <DeleteOutlined onClick={() => setIsClickDelete(true)} key="delete" />,
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
      <Modal
        title={t('delete-work-modal-header')}
        visible={isClickDelete}
        onOk={handelDelete}
        onCancel={handelCancel}
        okText={t('ok-button')}
        cancelText={t('cancel-button')}
      >
        <p>{t('delete-message-1')}</p>
        <p>{t('delete-message-2')}</p>
      </Modal>
      <Modal title="Edit Work" visible={isClickEdit} onOk={() => console.log('ok is clicked edit')} onCancel={handelCancel}>
        {/* <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p> */}
      </Modal>
    </>
  );
}

export default WorkCard;

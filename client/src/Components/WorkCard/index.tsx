/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  Card, message, Popconfirm,
} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { WorkCardProps, request } from '../../utils';
import WorkModal from '../WorkModal';
import './style.css';

const { Meta } = Card;

function WorkCard({
  work, isAuth, updateWorks, deletedWork,
}: WorkCardProps) {
  const { t } = useTranslation();
  const [isClickEdit, setIsClickEdit] = useState(false);

  const handelDelete = async () => {
    try {
      const result = await request('delete', `/work/${`${work.id}`}`);
      if (result.msg === 'work deleted successfully') message.success(t('successfully-delete'));
      deletedWork(work.id);
    } catch {
      message.error(t('error-delete-message'));
    }
  };

  const handelEdit = async (values: object) => {
    const data = await axios({
      method: 'patch',
      url: '/api/v1/work/',
      data: {
        id: work.id, ...values,
      },
    });
    return data;
  };
  const addSuccessWork = (edited: any) => {
    updateWorks(work.id, edited);
  };
  const fileList = [
    {
      uid: '-1',
      name: 'default.png',
      url: work.image,
      thumbUrl: work.image,
      type: 'image/png',
    }];

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
          <EditOutlined onClick={() => setIsClickEdit(true)} key="edit" />,
        ] : []}
        cover={<img alt="example" src={work.image} />}
      >
        <Meta
          className="work-card-body"
          title={work.title}
          description={work.content}
        />
      </Card>
      <WorkModal
        visible={isClickEdit}
        handelVisible={setIsClickEdit}
        initialValues={{
          modifier: 'public', title: work.title, content: work.content, image: fileList,
        }}
        modalText={t('edit-header')}
        handelFinisher={handelEdit}
        addSuccessWork={addSuccessWork}
      />
    </>
  );
}

export default WorkCard;

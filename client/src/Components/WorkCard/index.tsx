import React, { useState } from 'react';
import {
  Card, message, Popconfirm, Modal, Input, Upload, Button, Form,
} from 'antd';
import { EditOutlined, DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { WorkCardProps, request } from '../../utils';
import './style.css';

const { Meta } = Card;

function WorkCard({ work, isAuth }: WorkCardProps) {
  const { t } = useTranslation();
  const [isClickEdit, setIsClickEdit] = useState(false);
  const [form] = Form.useForm();

  const handelDelete = async () => {
    try {
      const result = await request('delete', `/work/${`${work.id}`}`);
      if (result.msg === 'work deleted successfully') message.success(t('successfully-delete'));
    } catch {
      message.error(t('error-delete-message'));
    }
  };

  const handelEdit = async () => {
    try {
      const { title, content, workImg } = form.getFieldsValue();
      await axios({
        method: 'patch',
        url: '/api/v1/work/',
        data: {
          id: work.id, title, content, workImg: workImg[0],
        },
      });
      setIsClickEdit(false);
      message.success(t('successfully-edit'));
    } catch (error: any) {
      message.error(t('error-delete-message'));
    }
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) return e;
    return e && e.fileList;
  };
  const fileList = [
    {
      uid: '-1',
      name: 'default.png',
      url: work.image,
      thumbUrl: work.image,
    }];
  const checkImage = (file: any) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error(t('img-upload'));
    }
    return false;
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
      <Modal
        title={t('edit-header')}
        visible={isClickEdit}
        onOk={handelEdit}
        onCancel={() => setIsClickEdit(false)}
        okText={t('ok-button')}
        cancelText={t('cancel-button')}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{ modifier: 'public', title: work.title, content: work.content }}
        >
          <Form.Item
            name="title"
            label={t('title-of-work')}
          >
            <Input />
          </Form.Item>
          <Form.Item name="content" label={t('content-of-work')}>
            <Input type="textarea" />
          </Form.Item>
          <Form.Item name="workImg" label={t('image-of-work')} valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload
              name="work-image"
              listType="picture"
              maxCount={1}
              beforeUpload={(file: any) => checkImage(file)}
              defaultFileList={[...fileList]}
            >
              <Button icon={<UploadOutlined />}>{t('upload-image-of-work')}</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default WorkCard;

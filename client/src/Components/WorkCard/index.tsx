import React, { useState } from 'react';
import {
  Card, message, Popconfirm, Modal, Input, Upload, Button, Form,
} from 'antd';
import { EditOutlined, DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
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
    // setIsClickEdit(false);
    // form
    //   .validateFields()
    //   .then((values) => {
    //     form.resetFields();
    //     setIsClickEdit(false);
    //     console.log('Received values of form: ', values);
    //     message.success(t('successfully-edit'));
    //   })
    //   .catch(() => {
    //     message.error(t('error-edit'));
    //   });
    try {
      form
        .validateFields()
        .then(async (values) => {
          form.resetFields();
          const { title, content, workImg } = values;
          const data = await request('patch', '/work/', {
            id: work.id, title, content, workImg: workImg[0],
          });
          console.log(111, data);
          setIsClickEdit(false);
        });
    } catch (error: any) {
      console.log(222, error);
      message.error(t('error-delete-message'));
    }
  };
  // const data = await axios.patch(
  //   '/work/',
  //   {
  //     id: work.id, title: values.title, content: values.content, workImg: values.image,
  //   },
  //   {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   },
  // );
  const normFile = (e: any) => {
    if (Array.isArray(e)) return e;
    return e && e.fileList;
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
              beforeUpload={() => false}
              maxCount={1}
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

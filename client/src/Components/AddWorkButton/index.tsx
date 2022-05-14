import React, { useState } from 'react';
import {
  message, Modal, Input, Upload, Button, Form,
} from 'antd';
import { useTranslation } from 'react-i18next';
import { UploadOutlined } from '@ant-design/icons';
import { request } from '../../utils';

function AddWorkButton() {
  const { t } = useTranslation();
  const [isClickAddWork, setIsClickAddWork] = useState(false);
  const [form] = Form.useForm();
  const { TextArea } = Input;

  const handelAddWork = () => {
    try {
      form
        .validateFields()
        .then(async (values) => {
          const { title, content, image } = values;
          await request('post', '/work', {
            title, content, image: image[0],
          });

          setIsClickAddWork(false);
          message.success(t('successfully-added'));
        });
    } catch (error: any) {
      message.error(t('error-delete-message'));
    }
  };
  const normFile = (e: any) => {
    if (Array.isArray(e)) return e;
    return e && e.fileList;
  };
  const checkImage = (file: any) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error(t('img-upload'));
    }
    return false;
  };
  return (
    <div className="container">
      <Button type="primary" onClick={() => setIsClickAddWork(true)}>{t('add-button')}</Button>
      <Modal
        title={t('add-button')}
        visible={isClickAddWork}
        onOk={handelAddWork}
        onCancel={() => setIsClickAddWork(false)}
        okText={t('add-button')}
        cancelText={t('cancel-button')}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{ modifier: 'public' }}
        >
          <Form.Item
            name="title"
            label={t('title-of-work')}
            rules={[{ required: true, message: t('title-required') }]}
          >
            <Input placeholder={t('text-title')} />
          </Form.Item>
          <Form.Item
            name="content"
            label={t('content-of-work')}
            rules={[{ required: true, message: t('content-required') }]}
          >
            <TextArea placeholder={t('text-content')} />
          </Form.Item>
          <Form.Item
            name="image"
            label={t('image-of-work')}
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[{ required: true, message: t('image-required') }]}
          >
            <Upload
              name="work-image"
              listType="picture"
              maxCount={1}
              beforeUpload={(file:any) => checkImage(file)}
            >
              <Button icon={<UploadOutlined />}>{t('upload-image-of-work')}</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default AddWorkButton;

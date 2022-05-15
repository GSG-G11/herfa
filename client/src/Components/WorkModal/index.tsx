/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import {
  message, Modal, Input, Upload, Button, Form,
} from 'antd';
import { useTranslation } from 'react-i18next';
import { UploadOutlined } from '@ant-design/icons';

export interface WorkModalProps {
  visible: boolean,
  handelVisible: (data: boolean) => void,
  modalText: string,
  handelFinisher: (data: object) => any,
  addSuccessWork: (work: any) => void
}
const defaultProps = {
  initialValues: {
    modifier: 'public',
    title: '',
    content: '',
    image: [
      {
        uid: '-1',
        name: 'default.png',
        url: '',
        thumbUrl: '',
        type: 'image/png',
      }],
  },
};

function WorkModal({
  visible, handelVisible, initialValues, modalText, handelFinisher, addSuccessWork,
} : WorkModalProps & typeof defaultProps) {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const { TextArea } = Input;

  const handelAddWork = async () => {
    try {
      const values = await form.validateFields();
      const { title, content, image } = values;
      const data = await handelFinisher({ title, content, image: image[0] });
      handelVisible(false);
      addSuccessWork(data.data);
      message.success(t('successfully-added'));
    } catch (error: any) {
      message.error(t('error-delete-message'));
    }
  };
  const normFile = (e: any) => {
    if (Array.isArray(e)) return e;
    return e && e.fileList;
  };

  return (
    <div className="container">
      <Modal
        title={modalText}
        visible={visible}
        onOk={handelAddWork}
        onCancel={() => handelVisible(false)}
        okText={modalText}
        cancelText={t('cancel-button')}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={initialValues}
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
              beforeUpload={() => false}
              accept="image/png, image/jpeg"
            >
              <Button icon={<UploadOutlined />}>{t('upload-image-of-work')}</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
WorkModal.defaultProps = defaultProps;
export default WorkModal;

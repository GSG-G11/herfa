// export default ModalRating;
import React from 'react';
import {
  Modal, Form, Input, Rate,
} from 'antd';

import { useTranslation } from 'react-i18next';

const { TextArea } = Input;

interface Values {
    userId:number,
    rate: number;
    content: string;
    phone:number;
}

interface FormProps {
  visible: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
  userId:number;
}
// eslint-disable-next-line react/function-component-definition
const ReviewFormModal: React.FC<FormProps> = ({
  visible,
  onCreate,
  onCancel,
  userId,
}) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  return (
    <Modal
      visible={visible}
      title={t('review')}
      okText={t('ok')}
      cancelText={t('Cancel')}
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        layout="vertical"
        name="form_in_modal"
        form={form}
        initialValues={{ rate: 3.5 }}
      >
        <Form.Item name="userId">
          <Input name="userId" value={userId} type="hidden" />
        </Form.Item>
        <Form.Item name="rate">
          <Rate allowHalf />
        </Form.Item>
        <Form.Item name="content" label={t('add-review')} rules={[{ required: true, message: t('write-review') }]}>
          <TextArea />
        </Form.Item>
        <Form.Item name="phone" label={t('Phone-Number')} rules={[{ required: true, message: t('add-phoneNumber') }]}>
          <Input name="phone" type="phone" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ReviewFormModal;

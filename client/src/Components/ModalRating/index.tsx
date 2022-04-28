// export default ModalRating;
import React, { useState } from 'react';
import {
  Button, Modal, Form, Input, Rate,
} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

// import { useTranslation } from 'react-i18next';
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
const ReviewForm: React.FC<FormProps> = ({
  visible,
  onCreate,
  onCancel,
  userId,
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="ضع تقيماً"
      okText="ok"
      cancelText="Cancel"
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
          <Rate allowHalf defaultValue={2.5} />
        </Form.Item>
        <Form.Item name="content" label="Description">
          <TextArea />
        </Form.Item>
        <Form.Item name="phone" label="Phone Number">
          <Input name="phone" type="phone" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

function CollectionsPage({ userId }: any) {
  const [visible, setVisible] = useState(false);
  const onCreate = async (values: any) => {
    try {
      setVisible(false);
      const request = { ...values, userId };
      const response = await axios.post('/api/v1/reviews', request);
      console.log(response);
    } catch (error:any) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <Button
        type="text"
        onClick={() => {
          setVisible(true);
        }}
        icon={(
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: '#FADB14' }}
          />
)}
      />
      <ReviewForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
        userId={userId}
      >
        <div />
      </ReviewForm>
    </div>
  );
}
export default function ({ userId }:any) {
  return <CollectionsPage userId={userId} />;
}

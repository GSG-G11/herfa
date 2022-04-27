// import React, { useState } from 'react';
// import {
//   Modal, Button, Rate, Input, Form,
// } from 'antd';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { useTranslation } from 'react-i18next';

// const { TextArea } = Input;

// interface Values {
//   title: string;
//   description: string;
//   modifier: string;
// }

// interface CollectionCreateFormProps {
//   visible: boolean;
//   onCreate: (values: Values) => void;
//   onCancel: () => void;
// }
// function ModalRating() {
//   const { t } = useTranslation();
//   const [rate, setRate] = useState(0);
//   const [comment, setComment] = useState('');
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     setIsModalVisible(false);
//     axios({
//       method: 'post',
//       url: '/api/v1/reviews',
//       data: {
//         rate,
//         comment,
//       },
//     }).then((res) => console.log(res)).catch((err) => console.log(err));
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };
//   return (
//     <div>
//       <Button type="text" icon={<FontAwesomeIcon icon={faStar}
//  size="lg" style={{ color: '#FADB14' }} />} onClick={showModal} />
//       {t('review')}
//       <Modal title="Rating me" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
//         <form>
//           <Rate allowHalf defaultValue={2.5} onChange={(e:any) => setRate(e.target.value)} />
//           <TextArea rows={4} onChange={(e:any) => setComment(e.target.value)} />
//         </form>
//       </Modal>
//     </div>
//   );
// }

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
    rate: number;
    comment: string;
    phone:number;
}

interface FormProps {
  visible: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}
// eslint-disable-next-line react/function-component-definition
const ReviewForm: React.FC<FormProps> = ({
  visible,
  onCreate,
  onCancel,
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
        initialValues={{ rate: 5 }}
      >
        <Form.Item name="rate">
          <Rate allowHalf defaultValue={2.5} />
        </Form.Item>
        <Form.Item name="comment" label="Description">
          <TextArea />
        </Form.Item>
        <Form.Item name="phone" label="Phone Number">
          <Input name="phone" type="phone" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

function CollectionsPage() {
  const [visible, setVisible] = useState(false);
  const onCreate = async (values: any) => {
    try {
      await axios.post('/api/v1/reviews', values);
      setVisible(false);
    } catch (error) {
      console.log(error);
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
      >
        <div />
      </ReviewForm>
    </div>
  );
}
export default function () {
  return <CollectionsPage />;
}

import React, { useState } from 'react';
import {
  Modal, Button, Rate, Input,
} from 'antd';

const { TextArea } = Input;
function ModalRating() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        أضف تقيما
      </Button>
      <Modal title="Rating me" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Rate allowHalf defaultValue={2.5} />
        <TextArea rows={4} />

      </Modal>
    </div>
  );
}

export default ModalRating;

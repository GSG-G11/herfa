import React, { useState } from 'react';
import {
  Modal, Button, Rate, Input,
} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const { TextArea } = Input;
function ModalRating() {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    // axios({
    //   method: 'post',
    //   url: '/api/v1/reviews',
    //   // data: {
    //   //   rate,
    //   //   comment,
    //   // },
    // });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Button type="text" icon={<FontAwesomeIcon icon={faStar} size="lg" style={{ color: '#FADB14' }} />} onClick={showModal} />
      {t('review')}
      <Modal title="Rating me" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Rate allowHalf defaultValue={2.5} />
        <TextArea rows={4} />
      </Modal>
    </div>
  );
}

export default ModalRating;

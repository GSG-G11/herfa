import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Form, message } from 'antd';
import { ServicesForm } from '../../Auth';

function EditModal({
  modalText,
  visible,
  handelEdit, handelVisible, initValues,
} : any) {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const onOk = async () => {
    try {
      const values = await form.validateFields();
      form.resetFields();
      handelEdit(values);
      handelVisible(false);
    } catch (error) {
      message.warning(t('error-message'));
    }
  };

  return (
    <Modal
      title={modalText}
      visible={visible}
      onOk={onOk}
      onCancel={() => handelVisible(false)}
      okText={t('edit-button')}
      cancelText={t('Cancel')}
    >
      <ServicesForm secondForm={initValues} isModal form={form} />
    </Modal>
  );
}

export default EditModal;

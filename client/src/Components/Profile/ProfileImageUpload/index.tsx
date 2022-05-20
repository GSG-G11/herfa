import React from 'react';
import {
  Upload, Button, message,
} from 'antd';
import axios from 'axios';
import { EditOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { ImgUploadProps } from '../../../utils';

function ImgUpload({ userId, setImage }: ImgUploadProps) {
  const { t } = useTranslation();
  const getBase64 = (file:any) => {
    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.addEventListener('load', () => {
        resolve(reader.result);
      });
      reader.readAsDataURL(file);
    });
  };

  const handleChange = async (image:any) => {
    try {
      const imgUrl = await getBase64(image.file);
      const { data } = await axios.patch(
        `/api/v1/providers/${userId}`,
        { profileImg: { thumbUrl: imgUrl, name: image.file.name } },
      );
      setImage(data.data);
    } catch (err:any) {
      message.error(t('error-heading'));
    }
  };
  return (
    <div className="upload-icon">
      <Upload
        name="profile-image"
        maxCount={1}
        beforeUpload={() => false}
        accept="image/png, image/jpeg"
        onChange={handleChange}
        showUploadList={false}
      >
        <Button>
          <EditOutlined />
        </Button>
      </Upload>
    </div>
  );
}

export default ImgUpload;

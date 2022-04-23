import React from 'react';
import { Card, Image } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import profileImg from '../../assets/profileImg.png';
import 'antd/dist/antd.css';
import '../../App.css';

function UserInfoCard() {
  return (
    <div>
      <Card
        bordered
        style={{ width: 300 }}
      >
        <Image width={100} src={profileImg} />
        <FontAwesomeIcon icon={faStar} size="lg" />
        <FontAwesomeIcon icon={faStar} size="lg" />
        <FontAwesomeIcon icon={faStar} size="lg" />
        <FontAwesomeIcon icon={faStarHalf} size="lg" />

        <div>
          <h2>Saleh T. Marouf</h2>
          <p>North Gaza</p>
          <p>الخدمات التي اقدمها </p>
          <p>
            <span>midical</span>
            <span>engineer</span>
            <span>midical</span>
          </p>
          <p>
            hi, its saleh im saleh and my name is saleh so, yoy can
            call me saleh in gaza sky geeks teme #4

          </p>
        </div>
        <div>
          <p>gsg2022@hotmail.com</p>
          <p>00972592222222</p>
          <FontAwesomeIcon icon={faInstagram} size="lg" />
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </div>
        <span>
          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          {' '}
          تواصل معي
        </span>
        <br />
        <span>
          <FontAwesomeIcon icon={faStar} size="lg" />
          {' '}
          أضف تقيماً
        </span>
      </Card>
    </div>
  );
}

export default UserInfoCard;

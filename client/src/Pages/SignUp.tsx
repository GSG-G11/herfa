import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Steps, Form, message } from 'antd';
import { PersonalForm, ServicesForm } from '../Components';
import { UserContext } from '../Context/LoggedUserContext';

const { Step } = Steps;

function SignUp() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [firstForm, setFirstForm] = useState({});
  const [secondForm, setSecondForm] = useState({});
  const { setUser }: any = useContext(UserContext);
  const navigate = useNavigate();
  const Location: any = useLocation();
  const [form] = Form.useForm();
  const onFinish = async (values:React.ChangeEvent<HTMLInputElement>) => {
    const finalData = firstForm ? { ...firstForm, ...values } : values;

    try {
      const data = await axios.post('/api/v1/signup', finalData);
      if (data) {
        const { id, providerName } = data.data.data;
        const newLink = `/user/${id}`;
        setUser({ providerName, providerID: id });
        navigate(Location.state?.from || newLink);
      }
    } catch (err:any) {
      if (err.response) {
        if (err.response.status === 500) {
          message.warning(t('error-message'));
        } else if (err.response.status === 400) {
          message.warning(err.response.data.msg);
        }
      } else {
        message.warning(t('error-message'));
      }
    }
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const next = () => {
    setCurrent(current + 1);
  };
  const steps = [
    {
      title: t('personal-information'),
      content: <PersonalForm
        next={next}
        setFirstForm={setFirstForm}
        firstForm={firstForm}
      />,
    },
    {
      title: t('services-information'),
      content: <ServicesForm
        firstForm={firstForm}
        setSecondForm={setSecondForm}
        secondForm={secondForm}
        prev={prev}
        form={form}
        onFinish={onFinish}
      />,
    },
  ];

  return (
    <div className="container">
      <h1>{t('crate-account')}</h1>
      <Steps current={current} size="small">
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action" />
    </div>
  );
}

export default SignUp;

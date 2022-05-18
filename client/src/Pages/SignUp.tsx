import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Steps } from 'antd';
import { PersonalForm, ServicesForm } from '../Components';
import { UserContext } from '../Context/LoggedUserContext';

const { Step } = Steps;

function SignUp() {
  const navigate = useNavigate();
  const userInfo: any = useContext(UserContext);
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [firstForm, setFirstForm] = useState({});
  const [secondForm, setSecondForm] = useState({});
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
      />,
    },
  ];

  return (userInfo?.user.providerID ? (<>{navigate(`/user/${userInfo?.user.providerID}`)}</>) : (
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
  )
  );
}

export default SignUp;

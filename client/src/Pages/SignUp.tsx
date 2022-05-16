import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Steps, Button } from 'antd';
import { PersonalForm, ServicesForm } from '../Components';

const { Step } = Steps;

function SignUp() {
  const [current, setCurrent] = useState(0);
  const [firstForm, setFirstForm] = useState({});
  const steps = [
    {
      title: 'First',
      content: <PersonalForm
        current={current}
        setCurrent={setCurrent}
        // changeStep={{ current, setCurrent, setFirstForm }}
        setFirstForm={setFirstForm}
      />,
    },
    {
      title: 'Second',
      content: <ServicesForm firstForm={firstForm} />,
    },
  ];

  const prev = () => {
    setCurrent(current - 1);
  };
  const { t } = useTranslation();
  return (
    <div className="container">
      <h1>{t('crate-account')}</h1>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            {t('previous-button')}
          </Button>
        )}
      </div>
    </div>
  );
}

export default SignUp;

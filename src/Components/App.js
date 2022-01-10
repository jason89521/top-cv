import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../Header';
import GeneralForm from './Form/GeneralForm';
import OtherForm from './Form/OtherForm';
import Preview from './Preview/Preview';

const App = () => {
  const [generalInfo, setGeneralInfo] = useState({
    headshotSrc: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    biography: '',
  });
  const [educationInfo, setEducationInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);

  const updateGeneralInfo = (property, value) => {
    const info = { ...generalInfo };
    info[property] = value;
    setGeneralInfo(info);
  };

  const updateOtherInfo = (title, blocks) => {
    title === 'Education' ? setEducationInfo(blocks) : setExperienceInfo(blocks);
  };

  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />

      <Main>
        <GeneralForm info={generalInfo} onUpdate={updateGeneralInfo} />
        <OtherForm title='Education' onUpdate={updateOtherInfo} info={educationInfo} />
        <OtherForm title='Experience' onUpdate={updateOtherInfo} info={experienceInfo} />
        <Preview
          generalInfo={generalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
        />
      </Main>
    </React.Fragment>
  );
};

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: inherit;
  }

  body {
    padding: 1rem 1.5rem;
    background-color: #efefeff9;
    font-family: 'Titillium Web', sans-serif;
  }
`;

const Main = styled.main`
  padding: 2.5rem 15rem;
  position: relative;

  & > *:last-child {
    margin-top: 5rem;
  }
`;

export default App;

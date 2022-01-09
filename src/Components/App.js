import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../Header';
import GeneralForm from './Form/GeneralForm';
import OtherForm from './Form/OtherForm';
import Preview from './Preview/Preview';

class App extends React.Component {
  state = {
    generalInfo: {
      headshotSrc: '',
      name: '',
      email: '',
      phone: '',
      address: '',
      biography: '',
    },
    educationInfo: [],
    experienceInfo: [],
  };

  /**
   * GeneralForm component call this function whenever it update info.
   */
  updateGeneralInfo = (property, value) => {
    const generalInfo = { ...this.state.generalInfo };
    generalInfo[property] = value;
    this.setState({ generalInfo: generalInfo });
  };

  /**
   * OtherForm component call this function whenever it update info.
   */
  updateOtherInfo = (title, blocks) => {
    if (title === 'Education') this.setState({ educationInfo: blocks });
    else this.setState({ experienceInfo: blocks });
  };

  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <Header />

        <Main>
          <GeneralForm info={this.state.generalInfo} onUpdate={this.updateGeneralInfo} />
          <OtherForm
            title='Education'
            onUpdate={this.updateOtherInfo}
            info={this.state.educationInfo}
          />
          <OtherForm
            title='Experience'
            onUpdate={this.updateOtherInfo}
            info={this.state.experienceInfo}
          />
          <Preview {...this.state} />
        </Main>
      </React.Fragment>
    );
  }
}

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

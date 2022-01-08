import React from 'react';
import { createGlobalStyle } from 'styled-components';
import GeneralForm from './GeneralForm';
import OtherForm from './OtherForm';

class App extends React.Component {
  state = {
    generalInfo: {
      headshotSrc: '',
      name: '',
      email: '',
      phone: '',
      address: '',
    },
    educationInfo: [],
    experienceInfo: [],
  };

  /**
   * GeneralForm components call this function whenever it update info.
   */
  updateGeneralInfo = (property, value) => {
    const generalInfo = { ...this.state.generalInfo };
    generalInfo[property] = value;
    this.setState({ generalInfo: generalInfo });
  };

  /**
   * OtherForm components call this function whenever it update info.
   */
  updateOtherInfo = (title, blocks) => {
    if (title === 'Education') this.setState({ educationInfo: blocks });
    else this.setState({ experienceInfo: blocks });
  };

  render() {
    return (
      <div>
        <GlobalStyles />
        <GeneralForm info={this.state.generalInfo} onUpdate={this.updateGeneralInfo} />
        <OtherForm title='Education' onUpdate={this.updateOtherInfo} />
        <OtherForm title='Experience' onUpdate={this.updateOtherInfo} />
      </div>
    );
  }
}

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    padding: 2.5rem 15rem;
  }
`;

export default App;

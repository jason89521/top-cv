import React from 'react';
import { createGlobalStyle } from 'styled-components';
import GeneralForm from './GeneralForm';
import OtherForm from './OtherForm';
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
        <Preview {...this.state} />

        <div>
          <GlobalStyles />
          <GeneralForm info={this.state.generalInfo} onUpdate={this.updateGeneralInfo} />
          <OtherForm title='Education' onUpdate={this.updateOtherInfo} info={this.state.educationInfo} />
          <OtherForm title='Experience' onUpdate={this.updateOtherInfo} info={this.state.experienceInfo} />
        </div>
      </React.Fragment>
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

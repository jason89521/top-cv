import React from 'react';
import { createGlobalStyle } from 'styled-components';
import GeneralForm from './GeneralForm';
import OtherForm from './OtherForm';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <GeneralForm />
        <OtherForm title='Education' />
        <OtherForm title='Experience' />
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

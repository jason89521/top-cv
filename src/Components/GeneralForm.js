import { TextField } from '@yuxuan-zheng/react-components';
import React from 'react';
import styled from 'styled-components';
import Headshot from './Headshot';

class GeneralInfo extends React.Component {
  render() {
    return (
      <div>
        <TopDiv>
          <Headshot />
          <div>
            <TextField label='Name' />
            <TextField label='Email' />
            <TextField label='Phone' />
            <TextField label='Address' />
          </div>
        </TopDiv>

        <TextField multiline rows={5} label='Biography' />
      </div>
    );
  }
}

const TopDiv = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  & > *:last-child {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GeneralInfo;

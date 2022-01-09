import { TextField } from '@yuxuan-zheng/react-components';
import React from 'react';
import styled from 'styled-components';
import Headshot from './Headshot';

class GeneralInfo extends React.Component {
  onInputChange = event => {
    this.props.onUpdate(event.target.id, event.target.value);
  };

  onImageChange = url => {
    this.props.onUpdate('headshotSrc', url);
  };

  render() {
    return (
      <div>
        <TopDiv>
          <Headshot onImageChange={this.onImageChange} />
          <div>
            <TextField id='name' label='Name' onChange={this.onInputChange} />
            <TextField id='email' label='Email' onChange={this.onInputChange} />
            <TextField id='phone' label='Phone' onChange={this.onInputChange} />
            <TextField id='address' label='Address' onChange={this.onInputChange} />
          </div>
        </TopDiv>

        <TextField
          multiline
          rows={5}
          id='biography'
          label='Biography'
          onChange={this.onInputChange}
        />
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

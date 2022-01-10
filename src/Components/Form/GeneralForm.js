import { TextField } from '@yuxuan-zheng/react-components';
import React from 'react';
import styled from 'styled-components';
import Headshot from './Headshot';

const GeneralInfo = ({ onUpdate }) => {
  const onInputChange = event => onUpdate(event.target.id, event.target.value);
  const onImageChange = url => onUpdate('headshotSrc', url);

  return (
    <div>
      <TopDiv>
        <Headshot onImageChange={onImageChange} />
        <div>
          <TextField id='name' label='Name' onChange={onInputChange} />
          <TextField id='email' label='Email' onChange={onInputChange} />
          <TextField id='phone' label='Phone' onChange={onInputChange} />
          <TextField id='address' label='Address' onChange={onInputChange} />
        </div>
      </TopDiv>

      <TextField
        multiline
        rows={5}
        id='biography'
        label='Biography'
        onChange={onInputChange}
      />
    </div>
  );
};

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

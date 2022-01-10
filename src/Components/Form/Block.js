import { Button, TextField } from '@yuxuan-zheng/react-components';
import React from 'react';
import styled from 'styled-components';

const Block = ({labels, blockId, onBlockChange, onClickDelete}) => {
  const onInputChange = event => {
    const label = event.target.id;
    const value = event.target.value;
    onBlockChange(blockId, label, value);
  };
  const textFields = labels.map(label => {
    return <TextField key={label} id={label} label={label} onChange={onInputChange} />;
  });
  return (
    <Container>
      {textFields}
      <Button
        variant='contained'
        color='warning'
        onClick={e => onClickDelete(blockId)}
      >
        Delete
      </Button>
    </Container>
  );
}

const Container = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export default Block;

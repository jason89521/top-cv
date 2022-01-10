import { Button } from '@yuxuan-zheng/react-components';
import React from 'react';
import styled from 'styled-components';
import Block from './Block';
import { getLabels, createBlock } from '../utils/OtherForm';

const OtherForm = ({ title, info, onUpdate }) => {
  const onBlockChange = (blockId, label, value) => {
    const newBlocks = [...info];
    const idx = newBlocks.findIndex(block => block.blockId === blockId);
    const updatedBlock = newBlocks[idx];
    for (let i = 0; i < updatedBlock.inputs.length; i++) {
      if (updatedBlock.inputs[i].label === label) {
        updatedBlock.inputs[i].value = value;
        break;
      }
    }
    onUpdate(title, newBlocks);
  };

  const onClickAdd = event => {
    const newBlocks = [...info];
    newBlocks.push(createBlock(getLabels(title)));
    onUpdate(title, newBlocks);
  };

  const onClickDelete = blockId => {
    const newBlocks = [...info];
    const idx = newBlocks.findIndex(block => block.blockId === blockId);
    newBlocks.splice(idx, 1);
    onUpdate(title, newBlocks);
  };

  const labels = getLabels(title);
  const blockComponents = info.map(block => {
    return (
      <Block
        key={block.blockId}
        blockId={block.blockId}
        labels={labels}
        onBlockChange={onBlockChange}
        onClickDelete={onClickDelete}
      />
    );
  });

  return (
    <Container>
      <Title>{title}</Title>

      {blockComponents}

      <Button variant='contained' onClick={onClickAdd}>
        Add
      </Button>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h3`
  font-size: 2.5rem;
`;

export default OtherForm;

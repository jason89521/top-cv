import { Button } from '@yuxuan-zheng/react-components';
import React from 'react';
import styled from 'styled-components';
import Block from './Block';
import { getLabels, createBlock } from './utils/OtherForm';

class OtherForm extends React.Component {
  /**
   * @param {string} blockId
   * @param {string} label
   * @param {string} value
   */
  onBlockChange = (blockId, label, value) => {
    const newBlocks = [...this.props.info];
    const idx = newBlocks.findIndex(block => block.blockId === blockId);
    const updatedBlock = newBlocks[idx];
    for (let i = 0; i < updatedBlock.inputs.length; i++) {
      if (updatedBlock.inputs[i].label === label) {
        updatedBlock.inputs[i].value = value;
        break;
      }
    }
    this.props.onUpdate(this.props.title, newBlocks)
  };

  onClickAdd = event => {
    const newBlocks = [...this.props.info];
    newBlocks.push(createBlock(getLabels(this.props.title)));
    this.props.onUpdate(this.props.title, newBlocks)
  };

  onClickDelete = blockId => {
    const newBlocks = [...this.props.info];
    const idx = newBlocks.findIndex(block => block.blockId === blockId);
    newBlocks.splice(idx, 1);
    this.props.onUpdate(this.props.title, newBlocks)
  };

  render() {
    const { title } = this.props;
    const labels = getLabels(title);
    const blockComponents = this.props.info.map(block => {
      return (
        <Block
          key={block.blockId}
          blockId={block.blockId}
          labels={labels}
          onBlockChange={this.onBlockChange}
          onClickDelete={this.onClickDelete}
        />
      );
    });

    return (
      <Container>
        <Title>{title}</Title>

        {blockComponents}

        <Button variant='contained' onClick={this.onClickAdd}>
          Add
        </Button>
      </Container>
    );
  }
}

const Container = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h3``;

export default OtherForm;

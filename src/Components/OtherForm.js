import { Button } from '@yuxuan-zheng/react-components';
import React from 'react';
import styled from 'styled-components';
import Block from './Block';
import { getLabels, createBlock } from './utils/OtherForm';

class OtherForm extends React.Component {
  state = {
    blocks: [],
  };

  /**
   * @param {string} blockId
   * @param {string} label
   * @param {string} value
   */
  onBlockChange = (blockId, label, value) => {
    const newBlocks = [...this.state.blocks];
    const idx = newBlocks.findIndex(block => block.blockId === blockId);
    for (let i = 0; i < newBlocks[idx].length; i++) {
      if (newBlocks[idx].inputs[i].label === label) {
        newBlocks[idx].inputs[i].value = value;
        break;
      }
    }
    this.setState({ blocks: newBlocks });
  };

  onClickAdd = event => {
    const newBlocks = [...this.state.blocks];
    newBlocks.push(createBlock(getLabels(this.props.title)));
    this.setState({ blocks: newBlocks });
  };

  onClickDelete = blockId => {
    const newBlocks = [...this.state.blocks];
    const idx = newBlocks.findIndex(block => block.blockId === blockId);
    newBlocks.splice(idx, 1);
    this.setState({ blocks: newBlocks });
  };

  componentDidMount() {
    this.setState({ blocks: [createBlock(getLabels(this.props.title))] });
  }

  render() {
    const { title } = this.props;
    const labels = getLabels(title);
    const blockComponents = this.state.blocks.map(block => {
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
  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h3``;

export default OtherForm;

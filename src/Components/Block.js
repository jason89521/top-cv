import { Button, TextField } from '@yuxuan-zheng/react-components';
import React from 'react';
import styled from 'styled-components';

class Block extends React.Component {
  onInputChange = event => {
    const label = event.target.id;
    const value = event.target.value;
    this.props.onBlockChange(this.props.blockId, label, value);
  };

  render() {
    const { labels, blockId } = this.props;
    const textFields = labels.map(label => {
      return <TextField key={label} id={label} label={label} onChange={this.onInputChange} />;
    });
    return (
      <Container>
        {textFields}
        <Button
          variant='contained'
          color='warning'
          onClick={e => this.props.onClickDelete(blockId)}
        >
          Delete
        </Button>
      </Container>
    );
  }
}

const Container = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export default Block;

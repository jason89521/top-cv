import React from 'react';
import styled from 'styled-components';

const OtherPreview = ({title, info}) => {
  const infoBlocks = info.map(infoBlock => {
    return (
      <Div key={infoBlock.blockId}>
        <p>{infoBlock.inputs[3].value} - {infoBlock.inputs[4].value}</p>
        <p>{infoBlock.inputs[0].value}</p>
        <p>{infoBlock.inputs[1].value}</p>
        <p>{infoBlock.inputs[2].value}</p>
      </Div>
    )
  })
  return (
    <div>
      <Title>{title}</Title>
      {infoBlocks}
    </div>
  );
}

const Title = styled.h3`
  padding-bottom: 1rem;
  border-bottom: 2px solid black;
  margin-bottom: 2rem;
`;

const Div = styled.div`
  margin-bottom: 2rem;
`


export default OtherPreview;

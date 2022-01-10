import React from 'react';
import styled from 'styled-components';

const GeneralPreview = ({ generalInfo }) => {
  return (
    <Container>
      <img src={generalInfo.headshotSrc} alt='' />
      <span>{generalInfo.name}</span>
      <span>{generalInfo.email}</span>
      <span>{generalInfo.phone}</span>
      <span>{generalInfo.address}</span>
      <p>{generalInfo.biography}</p>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 5rem;

  & > * {
    display: block;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  img {
    width: 200px;
    height: 240px;
  }

  p {
    white-space: pre-line;
    word-break: break-word;
  }
`;

export default GeneralPreview;

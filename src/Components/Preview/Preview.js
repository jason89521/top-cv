import React from 'react';
import styled from 'styled-components';
import GeneralPreview from './GeneralPreview';
import OtherPreview from './OtherPreview';

const Preview = ({ generalInfo, educationInfo, experienceInfo }) => {
  return (
    <Container>
      <GeneralPreview generalInfo={generalInfo} />
      <div>
        <OtherPreview title='Education' info={educationInfo} />
        <OtherPreview title='Experience' info={experienceInfo} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem 5rem;
  display: flex;
  gap: 3rem;
  font-size: 1.5rem;
  min-height: 800px;
  background-image: linear-gradient(to right bottom, #7ed56f80, #28b48580);

  & > div:first-child {
    flex: 2;
  }

  & > div:last-child {
    flex: 3;
  }
`;

export default Preview;

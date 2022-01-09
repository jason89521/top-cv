import React from 'react';
import styled from 'styled-components';
import GeneralPreview from './GeneralPreview';
import OtherPreview from './OtherPreview';

class Preview extends React.Component {
  render() {
    const { generalInfo, educationInfo, experienceInfo } = this.props;
    return (
      <Container>
        <GeneralPreview generalInfo={generalInfo} />
        <div>
          <OtherPreview title='Education' info={educationInfo} />
          <OtherPreview title='Experience' info={experienceInfo} />
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 2rem 5rem;
  display: flex;
  gap: 3rem;
  font-size: 1.5rem;
  min-height: 800px;
  background-color: #f5f5dc;

  & > div:first-child {
    flex: 2;
  }

  & > div:last-child {
    flex: 3;
  }
`;

export default Preview;

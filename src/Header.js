import React from 'react';
import styled from 'styled-components';

class Header extends React.Component {
  render() {
    return (
      <Container>
        <span>cv creator</span>
      </Container>
    );
  }
}

const Container = styled.header`
  background-image: linear-gradient(to right bottom, #7ed56f, #28b485);
  height: 200px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 5rem;
`;

export default Header;

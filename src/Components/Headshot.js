import React from 'react';
import styled from 'styled-components';
import defaultImg from './default.png';

class Headshot extends React.Component {
  state = {
    imageSrc: defaultImg,
  };

  onInputChange = event => {
    const [file] = event.target.files;
    if (file) {
      this.setState({ imageSrc: URL.createObjectURL(file) }, () => {
        this.props.onImageChange(this.state.imageSrc);
      });
    }
  };

  render() {
    return (
      <Container>
        <Label htmlFor='headshot'>
          <Image src={this.state.imageSrc} />
        </Label>
        <Input id='headshot' type='file' onChange={this.onInputChange} />
      </Container>
    );
  }
}

const Container = styled.div`
  width: 300px;
  height: 400px;
`;

const Label = styled.label`
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Input = styled.input`
  display: none;
`;

export default Headshot;

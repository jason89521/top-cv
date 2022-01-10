import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import defaultImg from './default.png';

const Headshot = ({ onImageChange }) => {
  const [imageSrc, setImageSrc] = useState(defaultImg);
  const onInputChange = event => {
    const [file] = event.target.files;
    if (file) setImageSrc(URL.createObjectURL(file));
  };

  useEffect(() => {
    onImageChange(imageSrc);
  });

  return (
    <Container>
      <Label htmlFor='headshot'>
        <Image src={imageSrc} />
      </Label>
      <Input id='headshot' type='file' onChange={onInputChange} />
    </Container>
  );
};

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

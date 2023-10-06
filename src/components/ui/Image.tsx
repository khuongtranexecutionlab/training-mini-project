import React from 'react';
import ImageNext, { ImageProps } from 'next/image';

interface IProps extends ImageProps {}

const Image: React.FC<IProps> = props => {
  return (
    <ImageNext
      {...props}
      sizes="(max-width 50px) 2vw,(max-width: 425px) 50vw,75vw"
      quality={60}
    />
  );
};

export default Image;

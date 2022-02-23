import React from 'react';
import {Image, ImageResizeMode} from 'react-native';

import Styles from './styles';

interface IProps {
  width?: number;
  height?: number;
  radius?: number;
  mrTop?: number;
  mode?: ImageResizeMode;
  img: any;
}

const styles = Styles;

const ImageUriComponent = ({
  width = 75,
  height = 75,
  radius = 0,
  mrTop = 0,
  mode = 'contain',
  img,
}: IProps) => {
  return (
    <Image
      style={[
        styles.img,
        {
          width: width,
          height: height,
          borderRadius: radius,
          marginTop: mrTop,
        },
      ]}
      source={img}
      resizeMode={mode}
    />
  );
};

export default ImageUriComponent;

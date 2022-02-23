import * as React from 'react';

import {Text} from 'react-native';

import Styles from './style';

interface IProps {
  text: string;
  color: string;
  size: number;
}

const styles = Styles;

const LabelTextComponent = ({text, color, size}: IProps) => {
  if (!text || !color || !size) {
    return null;
  }

  let TextReturn = () => (
    <Text
      style={[
        styles.statusStyle,
        {
          color: color,
          fontSize: size,
        },
      ]}>
      {text}
    </Text>
  );

  return <TextReturn />;
};

export default LabelTextComponent;

import * as React from 'react';

import {Text} from 'react-native';

import Styles from './style';

type WeightTypes =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

interface IProps {
  title: string;
  color: string;
  size: number;
  weight?: WeightTypes;
}

const styles = Styles;

const TitleComponent = ({title, color, size, weight = '500'}: IProps) => {
  if (!title || !color || !size) {
    return null;
  }

  let TextReturn = () => (
    <Text
      style={[
        styles.statusStyle,
        {
          color: color,
          fontSize: size,
          fontWeight: weight,
        },
      ]}>
      {title}
    </Text>
  );

  return <TextReturn />;
};

export default TitleComponent;

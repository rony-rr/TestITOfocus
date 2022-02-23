import React from 'react';
import {View} from 'react-native';

import GlobalVars from '../../../global/globalsVars';

import TitleComponent from '../../atoms/Titles';

import styles from './style';

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
  text: string;
  color: string;
  sizeText: number;
  weight?: WeightTypes;
  aditionalStyle?: any;
}

const TitleCategory = ({
  text,
  color,
  sizeText,
  weight,
  aditionalStyle,
}: IProps) => {
  if (!text || !color || !sizeText) return null;

  return (
    <View style={[styles.container, aditionalStyle || null]}>
      <TitleComponent
        title={text}
        color={color}
        size={sizeText}
        weight={weight}
      />
    </View>
  );
};

export default TitleCategory;

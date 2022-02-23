import React from 'react';
import {TouchableOpacity} from 'react-native';

import LabelTextComponent from '../../atoms/LabelText';

import Styles from './styles';

interface IProps {
  label: string;
  color: string;
  sizeText: number;
  aditionalStyle?: any;
  onPress: () => void;
}

const styles = Styles;

const LabelTouchable = ({
  label,
  color,
  sizeText,
  aditionalStyle,
  onPress,
}: IProps) => {
  if (!label || !color || !sizeText || !onPress) return null;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, aditionalStyle || null]}>
      <LabelTextComponent text={label} color={color} size={sizeText} />
    </TouchableOpacity>
  );
};

export default LabelTouchable;

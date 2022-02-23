import React from 'react';
import {TouchableOpacity} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import Styles from './style';

interface IProps {
  name: string;
  color: string;
  size: number;
  aditionalStyle?: any;
  onPress: () => void;
}

const styles = Styles;

const IconTouchable = ({
  name,
  color,
  size,
  aditionalStyle,
  onPress,
}: IProps) => {
  if (!name || !color || !size || !onPress) return null;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.touchableItem,
        {width: size + 5, height: size + 5},
        aditionalStyle || null,
      ]}>
      <Feather style={styles.iconstyle} name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconTouchable;

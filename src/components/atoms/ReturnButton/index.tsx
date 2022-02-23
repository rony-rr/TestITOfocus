import * as React from 'react';

import {TouchableOpacity} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

import Styles from './style';

interface IProps {
  color: string;
  size?: number;
  aditionalStyle?: any;
  navigation: any;
}

const styles = Styles;

const ReturnButton = ({
  color,
  size = 30,
  aditionalStyle,
  navigation,
}: IProps) => {
  const onPress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      style={[styles.retrobtn, aditionalStyle || null]}
      onPress={onPress}>
      <Entypo name="chevron-left" size={size} color={color} />
    </TouchableOpacity>
  );
};

export default ReturnButton;

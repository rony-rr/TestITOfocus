import React from 'react';
import {ActivityIndicator} from 'react-native';

interface IProps {
  size: number;
  color: string;
}

const Loading = ({size, color}: IProps) => {
  return <ActivityIndicator size={size} color={color} />;
};

export default Loading;

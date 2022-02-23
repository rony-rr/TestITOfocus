import * as React from 'react';

import {TouchableOpacity, Text} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import GlobalVars from '../../../global/globalsVars';

import Styles from './style';

interface IProps {
  text: string;
  color: string;
  textColor: string;
  iconName?: string;
  iconLeftName?: string;
  customStyleBtn?: any;
  Action?: () => void;
}

const styles = Styles;

const ButtonComponent = ({
  text,
  color,
  textColor,
  iconName,
  iconLeftName,
  customStyleBtn,
  Action,
}: IProps) => {
  const clickThisButton = () => {
    if (Action) {
      Action();
    }
  };

  if (!text) {
    return null;
  }

  const iconBtn =
    iconName && iconName !== '' ? (
      <AntDesign
        name={iconName}
        size={25}
        color={color ? color : GlobalVars.whiteLight}
        style={[styles.icon, {right: 20}]}
      />
    ) : null;
  const iconLeft =
    iconLeftName && iconLeftName !== '' ? (
      <AntDesign
        name={iconLeftName}
        size={20}
        color={color ? color : GlobalVars.whiteLight}
        style={[styles.icon, {left: 60}]}
      />
    ) : null;

  let ButtonReturn = () => (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        {backgroundColor: color || GlobalVars.firstColor},
        customStyleBtn || null,
      ]}
      onPress={() => clickThisButton()}>
      {iconLeft}
      <Text
        style={[
          styles.textbtn,
          {
            color: textColor || GlobalVars.whiteLight,
            marginLeft: iconLeftName ? 30 : 0,
          },
        ]}>
        {text}
      </Text>
      {iconBtn}
    </TouchableOpacity>
  );

  return <ButtonReturn />;
};

export default ButtonComponent;

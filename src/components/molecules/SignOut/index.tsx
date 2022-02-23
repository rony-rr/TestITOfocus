import React from 'react';
import {TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import GlobalVars from '../../../global/globalsVars';

import Storage from '../../../helpers/localStorahe';

import Styles from './style';

const style = Styles;

const SignOut = () => {
  const navigation = useNavigation();

  const onHandle = () => {
    SignedOut();
  };

  const SignedOut = () => {
    Storage.clearAll();
    // @ts-ignore
    navigation.navigate('Login');
  };

  return (
    <TouchableOpacity onPress={onHandle} style={style.btn}>
      <AntDesign name="poweroff" size={24} color={GlobalVars.redColor} />
    </TouchableOpacity>
  );
};

export default SignOut;

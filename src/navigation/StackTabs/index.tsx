import React, {useState, useEffect} from 'react';

import MainStack from './MainStack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Splash from '../../components/organisms/Splash';

const AppNavigator = () => {
  const [redirect, setRedirect] = useState('Login');
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      VerifySession();
    }, 3500);
  }, []);

  const VerifySession = async () => {
    try {
      let token = JSON.parse((await AsyncStorage.getItem('_Token')) || '');
      let response = token?.length > 0 ? true : false;
      // console.log( {token}, {response} );
      if (response) {
        setRedirect('Home');
        setFinished(true);
      } else {
        setFinished(true);
      }
    } catch (error) {
      // Error retrieving data
      // console.log(error);
      setFinished(true);
    }
  };

  if (!finished) {
    return <Splash />;
  }

  return <MainStack redirect={redirect} />;
};

export default AppNavigator;

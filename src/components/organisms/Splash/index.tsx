import React, {useEffect} from 'react';
import {View, Animated, Easing, StatusBar} from 'react-native';

import LottieView from 'lottie-react-native';

import Styles from './style';

const styles = Styles;

const Splash = () => {
  const progress: Animated.Value = new Animated.Value(0);

  const toValue: number | Animated.Value | Animated.ValueXY = 1;
  const duration: number = 1500;
  const easing: (value: number) => number = Easing.linear;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: toValue,
      duration: duration,
      easing: easing,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <LottieView
        source={require('../../../../assets/splash.json')}
        progress={progress}
        // autoPlay
        // loop
      />
    </View>
  );
};

export default Splash;

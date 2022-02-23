import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/** Import Main Stack Screens */
import LoginScreen from '../../screens/LoginScreen';
import HomeScreen from '../../screens/Home';
import SingleScreen from '../../screens/Single';

/** Import Components */

/** Import Theme */
// import {Styles} from './style';

const Stack = createNativeStackNavigator();
// const styles = Styles;

interface IProps {
  redirect?: string;
}

const MainStack = ({redirect = 'Login'}: IProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={redirect}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Single" component={SingleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;

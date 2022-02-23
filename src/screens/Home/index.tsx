import React, {useEffect, useCallback} from 'react';

import {View, BackHandler} from 'react-native';

import {useFocusEffect} from '@react-navigation/native';

import useModal from '../../utils/useModal';

/** Import Componentes Custom */
import StatusBarComponent from '../../components/atoms/StatusBar';
import SignOut from '../../components/molecules/SignOut';
import Header from '../../components/organisms/Header';
import ModalSearch from '../../components/organisms/ModalSearch';
import GridList from '../../components/organisms/GridList';

/** Styles */
import Styles from './style';

const styles = Styles;

const HomeScreen = ({navigation}: {route: any; navigation: any}) => {
  const {isShowing: isOpenSearch, toggle: showSearch} = useModal();

  useEffect(() => {
    /** Backhandler process Android -> back button */
    BackHandlerProcess();
  }, []);

  useFocusEffect(
    useCallback(() => {
      /** Backhandler process Android -> back button */
      BackHandlerProcess();
    }, []),
  );

  const BackHandlerProcess = () => {
    /** Android no return Login */
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  };

  return (
    <View style={styles.viewHome}>
      <StatusBarComponent />
      <Header
        navigation={navigation}
        showSearch={() => showSearch()}
        textTitle="Movies List"
        noBackButton={true}
      />
      <GridList process="list" />

      <ModalSearch visible={isOpenSearch} onShow={() => showSearch()} />

      <SignOut />
    </View>
  );
};

export default HomeScreen;

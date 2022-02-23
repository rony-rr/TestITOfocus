import React, {useEffect, useCallback, useState} from 'react';

import {View, ScrollView, Text} from 'react-native';

import {useFocusEffect} from '@react-navigation/native';

import GlobalVars from '../../global/globalsVars';

import useModal from '../../utils/useModal';

/** Import Componentes Custom */
import StatusBarComponent from '../../components/atoms/StatusBar';
import ImageUriComponent from '../../components/atoms/ImageUriComponent';
import Header from '../../components/organisms/Header';
import RelatedCarousel from '../../components/organisms/RelatedCarousel';
import ModalSearch from '../../components/organisms/ModalSearch';

/** Styles */
import Styles from './style';

const styles = Styles;

const SingleScreen = ({route, navigation}: {route: any; navigation: any}) => {
  const {item} = route.params;
  const {isShowing: isOpenSearch, toggle: showSearch} = useModal();

  useEffect(() => {}, []);

  useFocusEffect(useCallback(() => {}, []));

  return (
    <View style={styles.viewHome}>
      <StatusBarComponent />
      <Header
        navigation={navigation}
        showSearch={() => showSearch()}
        textTitle={item.original_title}
      />

      <ScrollView
        style={styles.viewScroll}
        contentContainerStyle={styles.contentContainer}>
        <ImageUriComponent
          width={GlobalVars.windowWidth - 100}
          height={GlobalVars.windowHeight / 3}
          radius={5}
          mrTop={30}
          img={{
            uri: `https://image.tmdb.org/t/p/w440_and_h660_face/${item.poster_path}`,
          }}
        />
        <Text style={styles.textPri}>Date: {item.release_date}</Text>
        <Text style={styles.textPri}>Average Rate: {item.vote_average}</Text>
        <Text style={styles.textResume}>{item.overview}</Text>

        <View style={styles.separator} />

        <RelatedCarousel process="list" idRelated={item.id} />
      </ScrollView>

      <ModalSearch visible={isOpenSearch} onShow={() => showSearch()} />
    </View>
  );
};

export default SingleScreen;

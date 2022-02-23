import * as React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

/** Import Styles for this Screen */
import Styles from './style';

const styles = Styles;

export default function ListCard({itemList}: {itemList: any}) {
  const navigation = useNavigation();

  React.useEffect(() => {}, []);

  const OnHandle = () => {
    // @ts-ignore
    navigation.navigate('Single', {item: itemList});
  };

  if (!itemList) return null;

  return (
    <View style={styles.contenedorView}>
      <TouchableOpacity onPress={() => {}} style={styles.containerCard}>
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w440_and_h660_face/${itemList.poster_path}`,
          }}
          style={styles.imageBg}
          imageStyle={styles.imageStyles}
        />
        <View style={styles.contentCard}>
          <Text style={styles.textName}>{itemList.original_title}</Text>
          <Text style={styles.textName}>{itemList.release_date}</Text>
          <Text style={styles.textName}>
            {'Rate: ' + itemList.vote_average}
          </Text>
          <Text
            style={styles.textFinal}
            numberOfLines={3}
            ellipsizeMode="tail">{`${itemList.overview}`}</Text>
          <TouchableOpacity style={styles.btnFooter} onPress={OnHandle}>
            <Text style={styles.textBtn}>Ver más</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}

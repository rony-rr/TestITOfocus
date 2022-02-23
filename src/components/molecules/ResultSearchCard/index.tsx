import * as React from 'react';

import {View, Image, TouchableOpacity, Text} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {useNavigation} from '@react-navigation/native';

import GlobalVars from '../../../global/globalsVars';

/** Import Custom elements */

import Styles from './style';

const styles = Styles;

const ResultSearchCard = ({
  name,
  image,
  item,
  onShow,
}: {
  name: string;
  image: any;
  item: any;
  onShow: () => void;
}) => {
  const navigation = useNavigation();
  const OnHandle = () => {
    onShow();
    // @ts-ignore
    navigation.navigate('Single', {item: item});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.rootContainer} onPress={() => OnHandle()}>
        <View style={styles.viewcontainer}>
          <View style={styles.leftcontent}>
            <Image
              style={styles.tinyLogo}
              resizeMode="cover"
              source={{uri: image}}
            />
          </View>
          <View style={styles.rightcontent}>
            <View style={styles.headercard} />
            <View style={styles.contentcard}>
              <Text style={styles.nameproduct}>
                {name.length > 15 ? name.slice(0, 15) + '...' : name}
              </Text>
              <Text style={styles.priceproduct}>Algún texto</Text>
              <TouchableOpacity
                style={styles.iconView}
                onPress={() => OnHandle()}>
                <AntDesign
                  name="rightcircleo"
                  size={24}
                  color={GlobalVars.firstColor}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ResultSearchCard;

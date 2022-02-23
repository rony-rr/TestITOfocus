import React from 'react';
import {View} from 'react-native';

/** Variables globales */
import GlobalVars from '../../../global/globalsVars';

/** Componentes */
import TitleComponent from '../../atoms/Titles';
import ReturnButton from '../../atoms/ReturnButton';
import ImageLocalComponent from '../../atoms/ImageLocalComponent';
import IconTouchable from '../../molecules/iconTouchable';

import styles from './styles';

const Header = ({
  navigation,
  textTitle,
  showSearch,
  noBackButton = false,
}: {
  navigation: any;
  textTitle: string;
  showSearch: () => void;
  noBackButton?: boolean;
  noMenu?: boolean;
}) => {
  return (
    <View style={styles.viewRoot}>
      <View style={styles.headerTopBlock}>
        {noBackButton || (
          <ReturnButton
            color={GlobalVars.whiteLight}
            size={35}
            navigation={navigation}
            aditionalStyle={{
              top: 15,
              left: 15,
            }}
          />
        )}
        <View style={styles.topLeftBlock}>
          <ImageLocalComponent
            img={require('../../../../assets/logo.png')}
            width={GlobalVars.windowWidth - 100}
            height={30}
          />
        </View>
        <View style={styles.topRightBlock}>
          <IconTouchable
            name={'search'}
            color={GlobalVars.whiteLight}
            size={25}
            onPress={() => showSearch()}
            aditionalStyle={{
              marginRight: 20,
            }}
          />
        </View>
      </View>
      <View style={styles.headerStickyBlock}>
        <TitleComponent
          title={textTitle}
          color={GlobalVars.whiteLight}
          size={20}
          weight="600"
        />
      </View>
    </View>
  );
};

export default Header;

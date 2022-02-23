import React from 'react';
import {Modal, View, TouchableOpacity} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import GlobalVars from '../../../global/globalsVars';

import TitleComponent from '../../atoms/Titles';

import styles from './styles';

const ModalAlert = ({
  text = '',
  openModal = false,
  onHelp,
}: {
  text: string;
  openModal: boolean;
  onHelp: () => void;
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={openModal}>
      <View style={styles.view}>
        <View style={styles.container}>
          <TouchableOpacity
            style={{position: 'absolute', top: 15, right: 15}}
            onPress={onHelp}>
            <AntDesign
              name="closecircleo"
              size={24}
              color={GlobalVars.whiteLight}
            />
          </TouchableOpacity>
          <View style={styles.centerContent}>
            <TitleComponent
              title={text}
              color={GlobalVars.whiteLight}
              size={20}
              weight="800"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalAlert;

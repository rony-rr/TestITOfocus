import {StyleSheet} from 'react-native';

import GlobalVars from '../../../global/globalsVars';

const Styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    right: 25,
    bottom: 75,
    width: 50,
    height: 50,
    borderRadius: 75,
    backgroundColor: GlobalVars.whiteLight,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Styles;

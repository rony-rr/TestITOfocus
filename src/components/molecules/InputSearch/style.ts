import {StyleSheet} from 'react-native';

import GlobalVars from '../../../global/globalsVars';

const Styles = StyleSheet.create({
  rootView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
  },

  container: {
    flex: 1,
    width: '100%',
  },

  inner: {
    paddingVertical: 8,
    width: '100%',
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    position: 'relative',
  },

  textInput: {
    height: 44,
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
    color: GlobalVars.black,
    paddingHorizontal: 25,
    borderRadius: 35,
  },

  iconstyle: {
    position: 'absolute',
    right: 25,
    top: 15,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});

export default Styles;

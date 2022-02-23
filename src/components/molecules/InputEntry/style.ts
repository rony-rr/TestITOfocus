import {StyleSheet} from 'react-native';

import GlobalVars from '../../../global/globalsVars';

const Styles = StyleSheet.create({
  rootView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    borderBottomColor: GlobalVars.blackPlane,
    borderBottomWidth: 0.25,
    position: 'relative',
  },

  container: {
    flex: 1,
    width: '100%',
  },

  inner: {
    paddingVertical: 8,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'center',
  },

  textInput: {
    height: 44,
    width: '100%',
    backgroundColor: 'transparent',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
    color: GlobalVars.blackPlane,
    paddingHorizontal: 25,
    borderRadius: 35,
  },

  iconstyle: {
    position: 'absolute',
    right: 25,
    top: 15,
  },

  eye: {
    position: 'absolute',
    right: 25,
    top: 15,
  },
});

export default Styles;

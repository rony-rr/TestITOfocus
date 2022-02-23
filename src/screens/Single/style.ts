import {StyleSheet} from 'react-native';

import GlobalVars from '../../global/globalsVars';

const Styles = StyleSheet.create({
  viewHome: {
    backgroundColor: GlobalVars.whiteLight,
    flex: 1,
    alignItems: 'center',
  },

  viewScroll: {
    flex: 1,
    width: '100%',
  },

  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },

  textPri: {
    fontSize: 17,
    width: '100%',
    marginTop: 30,
    textAlign: 'left',
    color: GlobalVars.blackPlane,
  },

  textResume: {
    fontSize: 17,
    marginTop: 30,
    textAlign: 'justify',
    color: GlobalVars.blackPlane,
  },

  separator: {
    width: '100%',
    height: 30,
  },
});

export default Styles;

import {StyleSheet} from 'react-native';

import GlobalVars from '../../global/globalsVars';

const Styles = StyleSheet.create({
  viewHome: {
    backgroundColor: GlobalVars.bgColor,
    // flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: 50,
    // paddingHorizontal: 20,
    width: '100%',
    flexDirection: 'column',
  },

  viewScroll: {
    flex: 1,
    width: '100%',
  },

  contentContainer: {
    alignItems: 'center',
    paddingBottom: 25,
  },

  linearGradient: {
    width: '100%',
    height: GlobalVars.windowHeight / 3,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  collection: {
    flexDirection: 'column',
    width: '100%',
    height: GlobalVars.windowHeight - GlobalVars.windowHeight / 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  entries: {
    width: '100%',
    height: 125,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});

export default Styles;

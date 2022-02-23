import {StyleSheet} from 'react-native';
import GlobalVars from '../../../global/globalsVars';

const Styles = StyleSheet.create({
  viewRoot: {
    width: '100%',
    backgroundColor: GlobalVars.firstColor,
    zIndex: 1,
    paddingTop: 50,
  },

  headerTopBlock: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: GlobalVars.windowHeight / 12,
    zIndex: 2,
  },

  topLeftBlock: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 25,
  },

  topRightBlock: {
    width: '50%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  headerStickyBlock: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalVars.firstColor,
    height: GlobalVars.windowHeight / 15,
    position: 'relative',
    textAlign: 'center',
  },
});

export default Styles;

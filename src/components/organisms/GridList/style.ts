import {StyleSheet} from 'react-native';

import GlobalVars from '../../../global/globalsVars';

const Styles = StyleSheet.create({
  rootView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  viewContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  headerContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },

  viewAllLabel: {
    position: 'absolute',
    right: 20,
    top: 10,
    color: GlobalVars.firstColor,
    fontSize: 13,
  },

  stylesCarousel: {
    width: '100%',
  },

  contentCarousel: {
    paddingTop: 25,
    paddingBottom: 250,
    paddingHorizontal: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  centeredSpinner: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Styles;

import {StyleSheet} from 'react-native';

import GlobalVars from '../../../global/globalsVars';

const Styles = StyleSheet.create({
  contenedorView: {
    width: GlobalVars.windowWidth / 2.2,
    marginBottom: 25,
    paddingHorizontal: 20,
  },

  containerCard: {
    width: '100%',
    backgroundColor: GlobalVars.whiteLight,
    borderRadius: 0,
  },

  imageBg: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: GlobalVars.windowHeight / 6.2,
  },

  imageStyles: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },

  floatWishIcon: {
    position: 'absolute',
    top: 10,
    right: 15,
  },

  contentCard: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'center',
    paddingVertical: 7,
    paddingHorizontal: 0,
    backgroundColor: GlobalVars.whiteLight,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  textName: {
    color: GlobalVars.blackPlane,
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold',
    letterSpacing: 1.1,
    textTransform: 'capitalize',
  },

  textFinal: {
    color: GlobalVars.blackPlane,
    fontSize: 15,
    width: '65%',
  },

  btnFooter: {
    backgroundColor: GlobalVars.firstColor,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 15,
  },

  textBtn: {
    color: GlobalVars.whiteLight,
    letterSpacing: 1.1,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Styles;

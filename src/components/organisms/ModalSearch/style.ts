import {StyleSheet, Platform} from 'react-native';

import GlobalVars from '../../../global/globalsVars';

const Styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalView: {
    marginTop: 20,
    backgroundColor: GlobalVars.whiteLight,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: '100%',
    height: Platform.OS === 'ios' ? '92%' : '100%',
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

  closeElement: {
    borderColor: GlobalVars.firstColor,
    borderWidth: 2,
    borderRadius: 75,
    padding: 2,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  viewInput: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    width: '100%',
    height: 100,
    paddingVertical: 20,
    marginTop: 20,
    borderRadius: 7,
  },

  stylesResult: {
    width: '100%',
  },

  contentResult: {
    paddingTop: 25,
    paddingHorizontal: 10,
    paddingBottom: 50,
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

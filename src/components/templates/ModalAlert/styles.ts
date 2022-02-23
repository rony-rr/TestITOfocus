import {StyleSheet} from 'react-native';
import GlobalVars from '../../../global/globalsVars';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    width: '100%',
  },

  container: {
    width: '90%',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    paddingTop: 80,
    paddingBottom: 25,
    paddingHorizontal: 15,
    borderWidth: 0.25,
    borderColor: GlobalVars.whiteLight,
    backgroundColor: GlobalVars.firstColor,
  },

  centerContent: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
});

export default styles;

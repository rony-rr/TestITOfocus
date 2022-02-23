import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const GlobalVars = {
  /* Layout */
  windowHeight: height,
  windowWidth: width,

  /** URL API */
  urlApi: 'https://reqres.in/api',
  urlMovies: 'https://api.themoviedb.org/3/movie/',
  API_KEY_MOVIES: '5c88ab78e4c61505dadf6e817016f972',

  /** Palette Colors */
  bgColor: '#FFF',
  black: '#000',
  firstColor: '#2531D8',
  redColor: '#F0223B',
  whiteLight: '#FEFEFE',
  blackPlane: '#262626',
};

export default GlobalVars;

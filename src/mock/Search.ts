import GlobalVars from '../global/globalsVars';
import Fetching from '../helpers/FetchPost';

export const getSearch = async (s: string) => {
  try {
    var parse_url = GlobalVars.urlMovies.replace('/movie/', '');
    const URL_REQUEST = `${parse_url}/search/movie?api_key=${GlobalVars.API_KEY_MOVIES}&query=${s}`;
    const res = await Fetching.FetchGet(URL_REQUEST, '');
    return res?.results || 'error';
  } catch (err) {
    return 'error';
  }
};

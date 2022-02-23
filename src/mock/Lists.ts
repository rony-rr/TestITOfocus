import GlobalVars from '../global/globalsVars';
import Fetching from '../helpers/FetchPost';

export const getList = async () => {
  try {
    const URL_REQUEST = `${GlobalVars.urlMovies}top_rated?api_key=${GlobalVars.API_KEY_MOVIES}`;
    const res = await Fetching.FetchGet(URL_REQUEST, '');
    return res?.results || 'error';
  } catch (err) {
    return 'error';
  }
};

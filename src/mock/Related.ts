import GlobalVars from '../global/globalsVars';
import Fetching from '../helpers/FetchPost';

export const getRelated = async (id: string | number) => {
  try {
    const URL_REQUEST = `${GlobalVars.urlMovies}/${id}/recommendations?api_key=${GlobalVars.API_KEY_MOVIES}`;
    const res = await Fetching.FetchGet(URL_REQUEST, '');
    return res?.results || 'error';
  } catch (err) {
    return 'error';
  }
};

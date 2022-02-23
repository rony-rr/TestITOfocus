const FetchPost = async (url: string, data: any, token: string) => {
  try {
    let headers;
    if (token?.length > 0) {
      headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      };
    } else {
      headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
    }
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    // console.warn(error);
    return 'error';
  }
};

const FetchGet = async (url: string, token: string) => {
  try {
    let headers;
    if (token?.length > 0) {
      headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      };
    } else {
      headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
    }
    const response = await fetch(url, {
      method: 'GET',
      headers: headers,
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    // console.warn(error);
    return 'error';
  }
};

export default {FetchPost, FetchGet};

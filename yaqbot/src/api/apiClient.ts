const API_URL = 'http://localhost:3000/api';

export const fetchData = async (endpoint: string, options = {}) => {
  try {
    //console.log(`Fetching ${API_URL}/${endpoint} with options:`, options);
    const response = await fetch(`${API_URL}/${endpoint}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error - status: ${response.status}`);
    }
    //console.log('Fetch response:', response);

    return response.json();
  } catch (error) {
    throw new Error('Error fetching data: ' + error);
  }
};

export const postData = async (endpoint: string, data: any) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  return fetchData(endpoint, options);
};

export const postPassword = async (endpoint: string, token: string, data: any) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };

  return fetchData(endpoint, options);
};

export const patchData = async (endpoint: string, data: any, config = {}) => {
  const options: Record<string, any> = {
    method: 'PATCH',
    headers: {},
    ...config,
  };

  if (data instanceof File) {
    const formData = new FormData();
    formData.append('file', data);
    options.body = formData;
  } else {
    options.headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
    options.body = JSON.stringify(data);
    //console.log('patchData - JSON body:', options.body);
  }

  return fetchData(endpoint, options);
};

export const deleteData = async (endpoint: string, config = {}) => {
  const options = {
    method: 'DELETE',
    ...config,
  };
  return fetchData(endpoint, options);
};

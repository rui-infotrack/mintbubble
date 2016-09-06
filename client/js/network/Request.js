function createDefaultOptions() {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };

  return {
    headers
  };
}

function buildUrl(path) {
  const baseUrl = ''; // this can be changed
  if (path.indexOf('?') > 0) {
    return `${baseUrl}/api/${path}&nocache=${Math.random()}`;
  }
  return `${baseUrl}/api/${path}?nocache=${Math.random()}`;
}

export default {
  post: (path, body, options = {}) => fetch(buildUrl(path), {
    ...options,
    ...createDefaultOptions(),
    method: 'post',
    body: JSON.stringify(body)
  }),

  get: (path, options = {}) => fetch(buildUrl(path), {
    ...options,
    ...createDefaultOptions(),
    method: 'get'
  }),

  put: (path, body, options = {}) => fetch(buildUrl(path), {
    ...options,
    ...createDefaultOptions(),
    method: 'put',
    body: JSON.stringify(body)
  }),

  delete: (path, body, options = {}) => fetch(buildUrl(path), {
    ...options,
    ...createDefaultOptions(),
    method: 'delete',
    body: JSON.stringify(body)
  })
};

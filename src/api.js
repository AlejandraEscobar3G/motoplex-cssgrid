const BASE_URL = 'http://localhost:8888/motoplex/cms/api/';

async function callApi(endpoint, options = {}) {
  options.headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  dealers: {
    getDealersList() {
      return callApi('get/stores');
    },
    getDealer(requestParams) {
      return callApi('get/store', {
        method: 'POST',
        body: JSON.stringify( requestParams ),
      });
    },
    read(badgeId) {
      return callApi(`/badges/${badgeId}`);
    },
    update(badgeId, updates) {
      return callApi(`/badges/${badgeId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(badgeId) {
      return callApi(`/badges/${badgeId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;

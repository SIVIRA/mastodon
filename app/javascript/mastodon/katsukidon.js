const URL_BASE = "/mastodon/";

const api = function (path, method, params) {
  return fetch(`${URL_BASE}${path}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    method: method,
    body: JSON.stringify(params)
  })
}

const postAPI = function (path, params) {
  return api(path, 'POST', params)
}

export function toot (statusID, userID, acct, userName) {
  return postAPI('toot', {
    status_id: statusID,
    user_id: userID,
    acct: acct,
    username: userName
  })
}

export function star (statusID, userID, acct, userName) {
  return postAPI('star', {
    status_id: statusID,
    user_id: userID,
    acct: acct,
    username: userName
  })
}

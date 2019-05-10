const URL_BASE = "/tepapi/mastodon/"

const api = function (path, method, params) {
  return fetch(`${URL_BASE}${path}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    method: method,
    body: JSON.stringify(params)
  }).then(function(response) {
    return response.json()
  })
  .then(function(body) {
    var message = (body || {}).message
    if (!!message) {
      alert(body.message)
    }
  })
  .catch(function(error) {
    console.error(error)
    alert('Unexpected error occurred')
  })
}

const postAPI = function (path, params) {
  return api(path, 'POST', params)
}

export function toot (statusID, userID, acct, userName, inReplyToStatusID, amount) {
  return postAPI('toot', {
    status_id: statusID,
    user_id: userID,
    acct: acct,
    username: userName,
    in_reply_to_status_id: inReplyToStatusID,
    amount: amount
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

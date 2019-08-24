export function get(url, params) {
  return execute(url, params);
}

export function post(url, params) {
  return execute(url, params);
}

function execute(url, body) {
  const params = {
    method: 'POST',
    body: body, // string or object
    headers: {
      'Content-Type': 'application/json'
    }
  };
  fetch(url, params).then(res => res.json());
}

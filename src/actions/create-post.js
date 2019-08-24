export function onCreatePost(postData) {
  return dispatch => {
    fetch('http://localhost:3000/ilike/vanilla/vikas')
      .then(res => res.json)
      .then(res => {
        dispatch({
          type: 'POST_SUCCESSFUL',
          data: res
        });
      });
  };
}

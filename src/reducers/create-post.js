export const createPostReducer = (state = {}, action) => {
  switch (action.type) {
    case 'POST_SUCCESSFUL': {
      return {
        ...state,
        postSuccess: true,
        res: action.data
      };
    }
    default:
      return state;
      break;
  }
};

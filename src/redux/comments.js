import * as ActionTypes from "./ActionTypes";

export const Comments = (
  state = {
    errorMessage: null,
    comments: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, errorMessage: null, comments: action.payload };

    case ActionTypes.COMMENT_FAILED:
      return { ...state, errorMessage: action.payload, comments: [] };

    case ActionTypes.ADD_COMMENT:
      let comment = action.payload;
      return { ...state, comments: state.comments.concat(comment) }; //the concat method creates a copy of the state. concats comment to the copy and then returns it
    default:
      return state;
  }
};

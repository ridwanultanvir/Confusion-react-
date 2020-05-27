import { COMMENTS } from "../shared/comments";
import * as ActionTypes from "./ActionTypes";

export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      let comment = action.payload;
      comment.id = state.length;
      comment.date = new Date().toISOString();
      return state.concat(comment); // creates a copy of the state. concats comment to the copy and then returns it
    default:
      return state;
  }
};

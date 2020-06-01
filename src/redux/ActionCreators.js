import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import fetch from "cross-fetch";

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
  const newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  };
  newComment.date = new Date().toISOString();

  fetch(baseUrl + "comments", {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        let err = new Error(error.message);
        throw err;
      }
    )
    .then((rseponse) => rseponse.json())
    .then((comment) => dispatch(addComment(comment)))
    .catch((error) => {
      console.log(error.message);
      alert("error: ", error.message);
    });
};

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  fetch(baseUrl + "dishes")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        let err = new Error(error.message);
        throw err;
      }
    )
    .then((rseponse) => rseponse.json())
    .then((data) => dispatch(addDishes(data)))
    .catch((error) => dispatch(dishesFailed(error.message)));
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});
export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

export const dishesFailed = (errorMessage) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errorMessage,
});

export const fetchComments = () => (dispatch) => {
  fetch(baseUrl + "comments")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        let err = new Error(error.message);
        throw err;
      }
    )
    .then((rseponse) => rseponse.json())
    .then((comment) => dispatch(addComments(comment)))
    .catch((error) => dispatch(commentsFailed(error.message)));
};

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

export const commentsFailed = (errorMessage) => ({
  type: ActionTypes.COMMENT_FAILED,
  payload: errorMessage,
});

export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading());

  fetch(baseUrl + "promotions")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        let err = new Error(error.message);
        throw err;
      }
    )
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)))
    .catch((error) => dispatch(promosFailed(error.message)));
};

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos,
});

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});
export const promosFailed = (errorMessage) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errorMessage,
});

export const fetchLeaders = () => (dispatch) => {
  dispatch(leadersLoading());

  fetch(baseUrl + "leaders")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        let err = new Error(error.message);
        throw err;
      }
    )
    .then((response) => response.json())
    .then((data) => dispatch(addLeaders(data)))
    .catch((error) => dispatch(leadersFailed(error.message)));
};

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING,
});

export const addLeaders = (leader) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leader,
});

export const leadersFailed = (errorMessage) => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errorMessage,
});

export const postFeedback = (feedback) => (dispatch) => {
  fetch(baseUrl + "feedback", {
    method: "POST",
    body: JSON.stringify(feedback),
    headers: {
      "Content-type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        let err = new Error(error.message);
        throw err;
      }
    )
    .then((response) => response.json())
    .then((data) => alert(JSON.stringify(data)))
    .catch((error) => alert(error.message));
};

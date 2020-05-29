import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  fetch(baseUrl + "dishes")
    .then((rseponse) => rseponse.json())
    .then((data) => dispatch(addDishes(data)));
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
    .then((rseponse) => rseponse.json())
    .then((comment) => dispatch(addComments(comment)));
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
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)));
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

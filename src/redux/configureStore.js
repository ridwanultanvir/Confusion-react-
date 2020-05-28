import { createStore, combineReducers, applyMiddleware } from "redux";
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createForms } from "react-redux-form";
import { InitialFeedback } from "./forms";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      ...createForms({
        feedback: InitialFeedback, // feedback is the name of the form model in contactuscomponent. this supplies an initioal state for the form
        // if you change firstname: 'sadat' in initialFeedback the form will have sadat filled in from begining in firstname position
      }),
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};

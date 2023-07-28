// store.js
import { createStore } from "redux";

const initialState = {
  email: "",

};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {


    case "POSTEMAIL":
      return {
        ...state,
        email: action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
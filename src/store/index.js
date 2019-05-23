//import createStore and ApplyMiddleware
import {createStore,applyMiddleware,compose} from "redux";

//Import Thunk

import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState={};
const middleware=[thunk];

const store=createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
);


export default store;

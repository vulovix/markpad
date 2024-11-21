import { configureStore, Reducer, combineReducers, Tuple } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createInjectorsEnhancer } from "redux-injectors";
import { compose, StoreEnhancer } from "redux";
import rootSaga from "./saga";
// import rootReducer from "./reducer";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Define a dynamic createReducer function
const createReducer = (injectedReducers: Record<string, Reducer> = {}): Reducer =>
  combineReducers({
    // ...rootReducer,
    ...injectedReducers,
  });

// Set up the redux-injectors enhancer
const injectorsEnhancer = createInjectorsEnhancer({
  createReducer,
  runSaga: sagaMiddleware.run,
});

// Combine enhancers using compose
const composedEnhancers = compose(injectorsEnhancer as StoreEnhancer);

// Configure the store
const store = configureStore({
  reducer: createReducer(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
    }).concat(sagaMiddleware),
  enhancers: (defaultEnhancers) => new Tuple(composedEnhancers, ...defaultEnhancers()),
});

// Run the root saga
sagaMiddleware.run(rootSaga);

// Export store types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

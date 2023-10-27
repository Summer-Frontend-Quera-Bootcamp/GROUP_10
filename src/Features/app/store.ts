import {
    AnyAction,
    combineReducers,
    configureStore,
    createAction,
  } from "@reduxjs/toolkit";
  
  import authReducer from "../AuthUserSlice/AuthSlice/AuthUserSlice";
  import userReducer, {
    reset,
  } from "../AuthUserSlice/AuthSlice/AuthUserSlice";
  
  const appReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
  });
  
  const rootReducer = (state: any, action: AnyAction) => {
    if (action.type === "resetAllState") {
      state = undefined;
    }
    return appReducer(state, action);
  };
  const resetAllState = createAction("resetAllState");
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  
  export default store;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;

  export {
    reset,
    resetAllState,
  };
  
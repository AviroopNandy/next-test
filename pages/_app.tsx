import type { AppProps } from "next/app";
/* eslint-disable */
// @ts-ignore
import storage from "redux-persist/lib/storage";
/* eslint-enable */
import { combineReducers } from "redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "../features/User";

import "../styles/globals.css";

const reducers = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

let persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />;
      </PersistGate>
    </Provider>
  );
}

export default MyApp;

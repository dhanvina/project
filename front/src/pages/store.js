import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sidePanelReducer from "../features/sidePanelSlice";

const rootReducer = combineReducers({ user: userReducer, sidePanel: sidePanelReducer });
const persistConfig = {
    key: "root",
    storage,
    version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
export const persistor = persistStore(store);

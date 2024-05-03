import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import userDataReducer from "../features/userData"
import membersDataReducer from "../features/membersData"

// Combine your reducers
const rootReducer = combineReducers({
    userData: userDataReducer,
    membersData:membersDataReducer,
})

// Configure persist options
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userData","membersData"], // List of reducers to persist
}

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Create your Redux store
export const store = configureStore({
  reducer: persistedReducer,
})

// Create a persistor object
export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
import { configureStore } from "@reduxjs/toolkit";

// import { chatsReducer } from "./chats/slice";
import { messagesReducer } from "./slice.js";

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    // chats: chatsReducer,
    messages: messagesReducer,
  },
});

export default store;

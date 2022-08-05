import { configureStore } from '@reduxjs/toolkit'
import historyReducer from './historySlice'
import modalReducer from './modalSlice'
import userReducer from './userSlice'


export const store = configureStore({
  reducer: {
    history: historyReducer,
    modal: modalReducer,
    user: userReducer
  },
})


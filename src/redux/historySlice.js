import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  history: "",
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addToHistory: (state, action) => {
      const newHistory = [action.payload, ...state.history]
      state.history= newHistory
    },
    updateHistory: (state, action) => {
      state.history= [ ...action.payload]
    },
    removeFromHistory: (state, action) => {     
        const newHistory = state.history.filter(user => user.id !== action.payload);
        state.history= newHistory
    },
    cleanHistory: (state) => {
      const cleanHistory = ""
      state.history=  cleanHistory
      window.sessionStorage.setItem("history", JSON.stringify(""))
  }
  },
})

export const {  addToHistory, removeFromHistory, cleanHistory, updateHistory } = historySlice.actions

export default historySlice.reducer
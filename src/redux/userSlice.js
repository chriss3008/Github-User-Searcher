import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'

const initialState = {
  user: {}
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user=  action.payload
    }   
  },
})

export const {  setUser, setUserHist } = userSlice.actions

export default userSlice.reducer

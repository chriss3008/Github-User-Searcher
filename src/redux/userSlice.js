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
    },
    setUserHist: (state, action) => {
      let newUser 
      const url = (`${BASE_URL}${action.payload}`)
      axios.get(url)
      .then((response) => {
        newUser = response.data
        console.log(newUser)
         state.user = newUser
              })
      .catch((error) => {
        console.log(error)
          alert("Can't load data, refresh your browser")
      })      
}    
  },
})

export const {  setUser, setUserHist } = userSlice.actions

export default userSlice.reducer
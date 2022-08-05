import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modal: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalTrue: (state) => {
      state.modal = true
    },
    setModalFalse: (state) => {
      state.modal = false
    }
  },
})

export const {  setModalTrue, setModalFalse } = modalSlice.actions

export default modalSlice.reducer
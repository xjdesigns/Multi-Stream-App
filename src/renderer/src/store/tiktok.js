import { createSlice } from '@reduxjs/toolkit'
import { LOADING_STATUS } from '../constants/constants'

const tiktokSlice = createSlice({
  name: 'tiktok',
  initialState: {
    key: '',
    status: LOADING_STATUS,
    users: 0,
    messages: [],
    error: {}
  },
  reducers: {
    setNewMessageTK: (state, action) => {
      const msg = action.payload
      const arr = [...state.messages, msg]
      state.messages = arr
    }
  }
})

export const { setNewMessageTK } = tiktokSlice.actions
export default tiktokSlice.reducer

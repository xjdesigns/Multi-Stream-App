import { createSlice } from '@reduxjs/toolkit'
import { LOADING_STATUS } from '../constants/constants'

const twitterSlice = createSlice({
  name: 'twitter',
  initialState: {
    key: '',
    status: LOADING_STATUS,
    users: 0,
    messages: [],
    error: {}
  },
  reducers: {
    setNewMessageTT: (state, action) => {
      const msg = action.payload
      const arr = [...state.messages, msg]
      state.messages = arr
    }
  }
})

export const { setNewMessageTT } = twitterSlice.actions
export default twitterSlice.reducer

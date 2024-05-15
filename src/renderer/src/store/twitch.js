import { createSlice } from '@reduxjs/toolkit'
import { LOADING_STATUS } from '../constants/constants'

const twitchSlice = createSlice({
  name: 'twitch',
  initialState: {
    key: '',
    status: LOADING_STATUS,
    users: 0,
    messages: [],
    error: {}
  },
  reducers: {
    setNewMessageTW: (state, action) => {
      const msg = action.payload
      const arr = [...state.messages, msg]
      state.messages = arr
    }
  }
})

export const { setNewMessageTW } = twitchSlice.actions
export default twitchSlice.reducer

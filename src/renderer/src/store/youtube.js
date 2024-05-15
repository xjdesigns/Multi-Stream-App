import { createSlice } from '@reduxjs/toolkit'
import { LOADING_STATUS } from '../constants/constants'

const youtubeSlice = createSlice({
  name: 'youtube',
  initialState: {
    key: '',
    status: LOADING_STATUS,
    users: 4,
    messages: [],
    error: {}
  },
  reducers: {
    setNewMessageYT: (state, action) => {
      const msg = action.payload
      const arr = [...state.messages, msg]
      state.messages = arr
    }
  }
})

export const { setNewMessageYT } = youtubeSlice.actions
export default youtubeSlice.reducer

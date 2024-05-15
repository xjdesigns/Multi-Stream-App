import { createSlice } from '@reduxjs/toolkit'
import { LOADING_STATUS, LOADED_STATUS } from '../constants/constants'

const setupSlice = createSlice({
  name: 'setup',
  initialState: {
    status: LOADING_STATUS,
    youtube: {
      isSetup: true,
      status: LOADING_STATUS,
      key: '',
      userId: ''
    },
    twitch: {
      isSetup: true,
      status: LOADING_STATUS,
      key: '',
      userId: ''
    },
    tiktok: {
      isSetup: false,
      status: LOADING_STATUS,
      key: '',
      userId: ''
    },
    twitter: {
      isSetup: false,
      status: LOADING_STATUS,
      key: '',
      userId: ''
    }
  },
  reducers: {
    initializeSetup: (state, action) => {
      const { setup } = action.payload
      return { ...state, ...setup }
    },
    setStatus: (state, action) => {
      state.status = action.payload.status
    },
    loadDetailsYoutube: (state, action) => {
      const details = action.payload
      state.youtube = {
        ...details
      }
    },
    createSetupYoutube: (state, action) => {
      const details = action.payload
      console.warn('setup details', details)
      state.youtube.isSetup = true
    },
    loadDetailsTwitch: (state, action) => {
      const details = action.payload
      state.twitch = {
        ...details
      }
    },
    createSetupTwitch: (state, action) => {
      const details = action.payload
      console.warn('setup details', details)
      state.twitch.isSetup = true
    },
    createSetupTiktok: (state, action) => {
      const details = action.payload
      console.warn('setup details', details)
      state.tiktok.isSetup = true
    },
    createSetupTwitter: (state, action) => {
      const details = action.payload
      console.warn('setup details', details)
      state.twitter.isSetup = true
    },
    removeSetup: (state, action) => {
      const { type } = action.payload
      state[type].isSetup = false
    }
  }
})

export const {
  initializeSetup,
  setStatus,
  loadDetailsYoutube,
  createSetupYoutube,
  loadDetailsTwitch,
  createSetupTwitch,
  createSetupTiktok,
  createSetupTwitter,
  removeSetup
} = setupSlice.actions
export default setupSlice.reducer

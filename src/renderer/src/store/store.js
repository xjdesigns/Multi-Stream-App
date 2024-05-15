import { configureStore } from '@reduxjs/toolkit'
import coreReducer from './core.js'
import setupReducer from './setup.js'
import youtubeReducer from './youtube.js'
import twitchReducer from './twitch.js'
import tiktokReducer from './tiktok'
import twitterReducer from './twitter'
import donationsReducer from './donations'

const store = configureStore({
  reducer: {
    core: coreReducer,
    setup: setupReducer,
    youtube: youtubeReducer,
    twitch: twitchReducer,
    tiktok: tiktokReducer,
    twitter: twitterReducer,
    donations: donationsReducer
  }
})

export default store

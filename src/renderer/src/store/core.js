import { createSlice } from "@reduxjs/toolkit"

const coreSlice = createSlice({
  name: 'core',
  initialState: {
    settingsMenuOpen: false,
    mockMenuOpen: false,
    order: ['youtube', 'twitch', 'tiktok', 'twitter'],
    hideMissingSetups: true,
    fontSize: '100',
    isFullWidth: false
  },
  reducers: {
    initializeCore: (state, action) => {
      const { core } = action.payload
      return { ...state, ...core }
    },
    toggleSettingsMenu: state => {
      state.settingsMenuOpen = !state.settingsMenuOpen
    },
    closeSettingsMenu: state => {
      state.settingsMenuOpen = false
    },
    toggleMockMenu: state => {
      state.mockMenuOpen = !state.mockMenuOpen
    },
    closeMockMenu: state => {
      state.mockMenuOpen = false
    },
    updateOrder: (state, action) => {
      const { order } = action.payload
      state.order = order
    },
    toggleHideMissing: state => {
      state.hideMissingSetups = !state.hideMissingSetups
    },
    updateFontSize: (state, action) => {
      const fontSize = action.payload
      state.fontSize = fontSize
    },
    toggleIsFullWidth: state => {
      state.isFullWidth = !state.isFullWidth
    }
  }
})

export const {
  initializeCore,
  toggleSettingsMenu,
  closeSettingsMenu,
  toggleMockMenu,
  closeMockMenu,
  updateOrder,
  toggleHideMissing,
  updateFontSize,
  toggleIsFullWidth
} = coreSlice.actions
export default coreSlice.reducer

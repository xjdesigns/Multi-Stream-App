import { createSlice } from '@reduxjs/toolkit'
import { LOADING_STATUS } from '../constants/constants'

const TEST_MESSAGES = [
  {
    name: 'Jim M.',
    amount: '10.00',
    message: 'Thanks for everything you do and giving me the best memories.'
  },
  {
    name: 'Maddy M.',
    amount: '1000.00',
    message: 'Lets Go'
  },
  {
    name: 'Jason J.',
    amount: '100.00',
    message: 'Are you my dad'
  }
]

const donationsSlice = createSlice({
  name: 'donations',
  initialState: {
    status: LOADING_STATUS,
    messages: [],
    error: {}
  },
  reducers: {
    setNewDonation: (state, action) => {
      const msg = action.payload
      const arr = [...state.messages, msg]
      state.messages = arr
    },
    removeDonation: (state, action) => {
      const { idx } = action.payload
      const arr = state.messages.filter((_, cidx) => (cidx !== idx))
      state.messages = arr
    }
  }
})

export const { setNewDonation, removeDonation } = donationsSlice.actions
export default donationsSlice.reducer

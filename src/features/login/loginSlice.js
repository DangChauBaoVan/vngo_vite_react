import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  account:[],
  login:false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    
    loginSuccess: (state, action) => {
      state.account = action.payload,
      state.login = true
    },
  },
})

// Action creators are generated for each case reducer function
export const {loginSuccess } = loginSlice.actions

export default loginSlice.reducer
import {createSlice} from '@reduxjs/toolkit';

// Create my initial state
const INITIAL_STATE = {
  firstName: null,
  lastName: null,
  email: null,
  userConnected: false,
  token: null
}

const userSlice = createSlice({
  name:'userInfos',
  INITIAL_STATE,
  reducers: {
    setUser: (state = INITIAL_STATE, action) => {
      return {
        ...action.payload, userConnected: true
      }
    }
  }
})

// extract action and reducer
const {actions, reducer} = userSlice;
export const {setUser} = actions;
export default reducer;
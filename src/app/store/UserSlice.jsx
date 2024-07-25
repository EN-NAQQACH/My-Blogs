import { createSlice } from '@reduxjs/toolkit';

const initialState = {
user:null
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      return { ...state, ...action.payload };
    },
    updateUser(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUser,updateUser } = UserSlice.actions;

export default UserSlice.reducer;

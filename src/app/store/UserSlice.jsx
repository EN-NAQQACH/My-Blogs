import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // name: '',
  email: '',
  // username: '',
  // bio: '',
  // image: '',
  // socialLinks: {
  //   facebook: '',
  //   twitter: '',
  //   instagram: '',
  // },
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUser} = UserSlice.actions;

export default UserSlice.reducer;

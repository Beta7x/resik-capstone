import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // slice for already existing user (dummy)
  userData: {
    name: 'Jane Doe',
    username: 'janedoe18',
    address:
      'Jl. Surya Sumantri No. 56, Kec. Sukajadi, Pasteur, Kota Bandung, Jawa Barat, 40161',
    email: 'janedoe18@gmail.com',
    phone: '0811234566790',
    password: 'test',
    avatar:
      'https://res.cloudinary.com/beta7x/image/upload/v1669666803/my_profile.jpg',
    points: 9080,
  },
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.profile = action.payload;
    },
    updateUser: (state, action) => {
      state.userData = action.payload;
    },
    updatePassword: (state, action) => {
      state.userData.password = action.payload;
    },
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, updateUser, updatePassword, login, logout } =
  userSlice.actions;
export default userSlice.reducer;

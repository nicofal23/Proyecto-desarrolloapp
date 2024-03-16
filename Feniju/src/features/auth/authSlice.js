import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
      user: null,
      token: null,
      imageCamera: null,
      localId: null,
      profileImage: null,
      location: {
        latitude: null,
        longitude: null,
        address: null,
      },
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.value = {
        user: action.payload.email,
        token: action.payload.idToken,
        localId: action.payload.localId,
      };
    },
    clearUser: (state) => (state.value = { user: null, token: null }),
    setCameraImage: (state, action) => {
      state.value = {
        ...state.value,
        imageCamera: action.payload,
      };
    },
    setProfileImage: (state, action) => {
      state.value = {
        ...state.value,
        profileImage: action.payload,
      };
    },
    setUserLocation: (state, action) => {
      state.value = {
        ...state.value,
        location: {
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
          address: action.payload.address,
        },
      };
    },
    updateUserProfile: (state, action) => {
      state.value = {
        ...state.value,
        user: action.payload.name, 
        profileImage: action.payload.profileImage, 
        location: { 
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
          address: action.payload.address,
        },
      };
    },
    logout: (state) => {
      state.value = {
        user: null,
        token: null,
        imageCamera: null,
        localId: null,
        profileImage: null,
        location: {
          latitude: null,
          longitude: null,
          address: null,
        },
      };
    },
  },
});

export const { setUser, clearUser, setCameraImage, setProfileImage, setUserLocation, updateUserProfile, logout } = authSlice.actions;

export default authSlice.reducer;

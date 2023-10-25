import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authMethods from "../authMethods/authMethods";
import { AxiosError } from "axios";
import { initialState } from "../types/type";

const initialState: initialState = {
  user: JSON.parse(localStorage.getItem("user") as string) || null,
  authToken: JSON.parse(localStorage.getItem("authToken") as string) || null,
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: "",
};

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkApi) => {
    try {
      return await authMethods.login(userData);
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message || error.message;
        return thunkApi.rejectWithValue(message);
      }
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkApi) => {
    try {
      return await authMethods.register(userData);
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message || error.message;
        return thunkApi.rejectWithValue(message);
      }
    }
  }
);

export const forgetPass = createAsyncThunk(
  "auth/forgetPass",
  async (email, thunkApi) => {
    try {
      return await authMethods.forgetPass(email);
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message || error.message;
        return thunkApi.rejectWithValue(message);
      }
    }
  }
);

const authUserSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const { accessToken, refreshToken } = action.payload.data;
        state.authToken = { accessToken, refreshToken };
        state.user = action.payload.data;
        state.message = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        state.authToken = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(forgetPass.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgetPass.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(forgetPass.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = authUserSlice.actions;
export default authUserSlice.reducer;

// RestPassword
// ForgetPassword
// RefreshToken
// Logout

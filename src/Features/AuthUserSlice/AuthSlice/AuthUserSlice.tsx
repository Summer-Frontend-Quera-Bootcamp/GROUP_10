import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authMethods from "../authMethods/authMethods";
import { AxiosError } from "axios";
// import { initialStateType,User } from "../types/type";
import { FieldValues } from "../../../Pages/AuthenticationPages/RegisterPage/RegisterPage";
type User = {
  id: string;
  username: string;
  email: string;
  settings: any[];
};

type initialStateType = {
  authToken: { access: string; refresh: string } | null;
  user: User | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: unknown;
};

const initialState: initialStateType = {
  user: JSON.parse(localStorage.getItem("user") as string) || null,
  authToken: JSON.parse(localStorage.getItem("authToken") as string) || null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};
export const register = createAsyncThunk(
  "Auth/register",
  async (userData: FieldValues, thunkAPI) => {
    try {
      return await authMethods.register(userData);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message =
          error?.response?.data?.message || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
      throw error;
    }
  }
);
export const login = createAsyncThunk(
  "Auth/login",
  async (userData: FieldValues, thunkAPI) => {
    try {
      return await authMethods.login(userData);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message =
          error?.response?.data?.message || error.message || error.toString();

        return thunkAPI.rejectWithValue(message);
      }
      throw error;
    }
  }
);

export const forgot = createAsyncThunk(
  "Auth/forget-password",
  async (userEmail: FieldValues, thunkAPI) => {
    try {
      return await authMethods.forgot(userEmail);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message =
          error?.response?.data?.message || error.message || error.toString();

        return thunkAPI.rejectWithValue(message);
      }
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    logOut: (state) => {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      state.user = null;
      state.authToken = null;
    },
    authTokenUpdate: (state, action) => {
      state.authToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.authToken = null;
        state.message = action.payload.message;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const { access, refresh } = action.payload;
        state.authToken = { access, refresh };
        state.user = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(forgot.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgot.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(forgot.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, logOut, authTokenUpdate } = authSlice.actions;
export default authSlice.reducer;

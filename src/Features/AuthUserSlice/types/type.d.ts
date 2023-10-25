export type User = {
  user: number;
  username: string;
  email: string;
};

export type authToken = {
  refreshToken: string;
  accessToken: string;
};

export type initialState = {
  authToken: { accessToken: string; refreshToken: string } | null;
  user: User | null;
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  message: unknown;
};

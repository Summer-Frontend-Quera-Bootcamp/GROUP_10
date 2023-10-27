export type User = {
  id: string;
  username: string;
  email: string;
};

export type initialStateType = {
  authToken: { access: string; refresh: string } | null;
  user: User | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: unknown;
};
export interface LoginInput {
  email: String;
  password: String;
}

export type Token = String;
export type Name = String;
export type Avatar = String;
export type Email = String;


export interface User {
  name: String;
  email: String;
  avatar: String;
  userId: string
}

export type AuthStoreState = {
  name: String|null,
  email: String|null,
  avatar: String|null,
  userId: String|null,
  token: String|null
};

export interface GenericResponse {
  status: String;
  message: String;
}

export interface ResetPasswordInput {
  email: String;
}

export interface ResetPasswordStagedInput {
  new_password: String;
  new_password_confirmation: String;
}

export interface SignUpInput {
  name: String;
  email: String;
  password: String;
  passwordConfirm: String;
}

export interface LoginResponse {
  status: String;
  access_token: String;
}

export interface SignUpResponse {
  status: String;
  message: String;
}

export interface UserResponse {
  status: String;
  data: {
    user: User;
  };
}

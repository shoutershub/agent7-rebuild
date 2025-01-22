// types.ts
export type Token = string;
export type Name = string;
export type Avatar = string;
export type Email = string;

export interface UserType {
  userId: string;
  name: Name;
  email: Email;
  avatar: Avatar;
  token?: Token;
}

export interface AuthStoreState {
  userId?: string;
  name?: Name;
  email?: Email;
  avatar?: Avatar;
  token?: Token;
}
export default interface ItemsType {
    id: number;
    name: string;
    email: string;
    avatar: string;
    lastLogin: string;
    memberSince: string;
    permission: string;
    unReadMessages?: number|string;
  }
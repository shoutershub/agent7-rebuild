import { LocationQueryValue } from "vue-router";
import apiClient from "./http-common"
import type { LoginResponse, UserResponse, GenericResponse, LoginInput, SignUpInput, ResetPasswordInput, ResetPasswordStagedInput } from '@/api/types/auth/types';


class AuthService {
  login(data: LoginInput): Promise<any> {
    return apiClient.post("/login", data);
  }
  // join(data: any): Promise<any> {
  //   return apiClient.post("/join-workspace", data);
  // }
  // register(data: SignUpInput): Promise<any> {
  //   return apiClient.post("/register", data);
  // }
  // resetPassword(data: ResetPasswordInput): Promise<any> {
  //   return apiClient.post("/reset-password", data);
  // }
  // resetPasswordStaged(data: ResetPasswordStagedInput, resetToken: any): Promise<any> {
  //   return apiClient.post(`/reset-password/${resetToken}`, data);
  // }
  // verifyToken(resetToken: any): Promise<any> {
  //   return apiClient.get(`/reset-password/check/${resetToken}`);
  // }
  // checkAcceptanceToken(data: any): Promise<any> {
  //   return apiClient.post("check-workspace-invitation-token", data);
  // }
  // checkIvTokenIsValid(data: any): Promise<any> {
  //   return apiClient.post("check-workspace-invitation-token-is-valid", data);
  // }
}


export default new AuthService();

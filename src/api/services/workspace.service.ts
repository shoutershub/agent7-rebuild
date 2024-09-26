import apiClient from "./http-common"

class WorkspaceService {
  getTimezone(): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "multipart/form-data"
    return apiClient.get("/get-timezone");
  }
  getWorkspaces(): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "multipart/form-data"
    return apiClient.get("/get-workspaces");
  }
  createWorkspace(data: any): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "multipart/form-data"
    return apiClient.post("/create-workspace", data);
  }
  deleteWorkspace(workspaceId: Number): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.post(`/delete-workspace/${workspaceId}`, workspaceId);
  }
  updateWorkspace(workspaceId: Number, data: any): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "multipart/form-data"
    return apiClient.post(`/update-workspace/${workspaceId}`, data);
  }
  inviteNewTeamMember(workspaceId: any, data:any): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.post(`/invite-user-by-id/${workspaceId}`, data);
  }
  removeUserFromWorkspace(data: any): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.post("remove-team-member-from-workspace-by-id", data);
  }
  changeTeamMemberRole(data: any): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.post("change-team-member-role-by-id", data);
  }
  accept(data: any): Promise<any> {
    return apiClient.post("/accept-workspace", data);
  }
  checkAcceptanceTokenIsValid(data: any): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.post("/check-workspace-invitation", data);
  }
  check(): Promise<any>{
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.get("/check");
  }
  getPublicWorkspaceInfo(data: any): Promise<any>{
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.post("/get-public-workspace-info", data);
  }
  updateEmail(data: any): Promise<any>{
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.post("/update-email", data);
  }
}

export default new WorkspaceService();

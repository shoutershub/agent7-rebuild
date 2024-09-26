import apiClient from "./http-common"

class DashboardService {
  getDashboardWorkspaceInfo(workspaceId: string): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.get(`/workspace/${workspaceId}/dashboard`);
  }
  logout(): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.post(`/logout`);
  }
  updateUserAvatar(workspaceId: string, data: any): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "multipart/form-data"
    return apiClient.post(`/workspace/${workspaceId}/update-auth-user-avatar`, data);
  }
  updateUserPersonalInfo(workspaceId: string, data: any): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.post(`/workspace/${workspaceId}/update-auth-user`, data);
  }
  updateUserPreferenceSettings(workspaceId: string, data: any): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.post(`/workspace/${workspaceId}/update-notification-preferences`, data);
  }
  updateUserPassword(workspaceId: string, data: any): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.post(`/workspace/${workspaceId}/update-auth-user-password`, data);
  }
  updateUserEmail(workspaceId: string, data: any): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.post(`/workspace/${workspaceId}/update-auth-user-email`, data);
  }
  deleteUserAccount(workspaceId: string, data: any): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.post(`/workspace/${workspaceId}/delete-auth-user`, data);
  }
  getCurrentWorkspaceTeamMembers(workspaceId: string, data: any): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.get(`/workspace/${workspaceId}/get-current-workspace-team-members`, {params: data });
  }
  searchCurrentWorkspaceTeamMembers(workspaceId: string, data: any): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.get(`/workspace/${workspaceId}/search-current-workspace-team-members`, {params: data });
  }
  inviteNewTeamMember(workspaceId: string, data:any): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.post(`/workspace/${workspaceId}/invite-user-by-slug`, data);
  }
  changeTeamMemberRole(workspaceId: string, data:any): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.post(`/workspace/${workspaceId}/change-team-member-role-by-slug`, data);
  }
  removeUserFromWorkspace(workspaceId: string, data: any): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.post(`/workspace/${workspaceId}/remove-team-member-from-workspace-by-slug`, data);
  }
  updateTaskControlAccess(workspaceId: string, data: any): Promise<any>{
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.post(`/workspace/${workspaceId}/update-workspace-task-control-access`, data);
  }
  updateAgentWorkspacePermissions(workspaceId: string, data: any): Promise<any>{
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.post(`/workspace/${workspaceId}/update-agent-workspace-permission`, data);
  }
  updateAdminWorkspacePermissions(workspaceId: string, data: any): Promise<any>{
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.post(`/workspace/${workspaceId}/update-admin-workspace-permission`, data);
  }
  getTeamManagementSettings(workspaceId: string): Promise<any>{
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.get(`/workspace/${workspaceId}/get-team-management-settings`);
  }
  updateTeamMember(workspaceId: string, teamMemberId: any, data: any): Promise<any>{
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.post(`/workspace/${workspaceId}/update-team-member-information/${teamMemberId}`, data);
  }
  getWorkspaceWidget(workspaceId: string): Promise<any>{
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.get(`/workspace/${workspaceId}/get-workspace-widget`);
  }
  createWidget(workspaceId: string, data: any): Promise<any>{
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.post(`/workspace/${workspaceId}/create-widget`, data);
  }
  updateWidget(workspaceId: string, data: any): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.post(`/workspace/${workspaceId}/update-widget`, data);
  }
  updateWidgetWebsiteIcon(workspaceId: string, data: any): Promise<any> {
    apiClient.defaults.headers['Content-Type'] = "multipart/form-data"
    return apiClient.post(`/workspace/${workspaceId}/update-widget`, data);
  }
  getSelectOptions(workspaceId: string): Promise<any>{
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.get(`/workspace/${workspaceId}/get-widget-select-options`);
  }
  deleteWidget(workspaceId: string, widgetId: string): Promise<any>{
    apiClient.defaults.headers['Content-Type'] = "application/json"
    return apiClient.post(`/workspace/${workspaceId}/delete-widget/${widgetId}`);
  }
}

export default new DashboardService();

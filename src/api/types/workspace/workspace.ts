export interface workspaceType  {
  workspace_name: String,
  workspace_slug: String,
  workspace_logo: String,
  workspace_timezone: String,
  is_default: String,
  created_at: String,
  members: [
    {
      id: Number,
      name: String,
      avatar: String,
    },
  ],}

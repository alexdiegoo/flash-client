# API Contract: Workspace Screen

## IPC Methods (Main → Renderer)

### `getWorkspaces()`
- **Purpose**: Retrieve the list of all workspaces from storage.
- **Returns**: `Promise<WorkspaceList>`

### `createWorkspace(name: string)`
- **Purpose**: Add a new workspace to storage.
- **Arguments**:
  - `name` (string): Name for the new workspace.
- **Returns**: `Promise<Workspace>` (the newly created workspace)

### `openWorkspace(id: string)`
- **Purpose**: Notify the application to open a specific workspace.
- **Arguments**:
  - `id` (string): ID of the workspace to open.
- **Returns**: `Promise<void>`

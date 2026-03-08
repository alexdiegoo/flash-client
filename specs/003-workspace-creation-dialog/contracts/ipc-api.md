# API Contract: Workspace Creation Dialog

## IPC Methods (Renderer → Main)

### `createWorkspace(name: string)`
- **Purpose**: Persist a new workspace with the given name.
- **Arguments**:
  - `name` (string): Validated name from the dialog.
- **Returns**: `Promise<Workspace>`

# Data Model: Workspace Screen

## Entities

### Workspace
- **Purpose**: Represents a project container.
- **Attributes**:
  - `id` (string, UUID): Unique identifier for the workspace.
  - `name` (string): User-defined name for the workspace.
  - `lastAccessed` (timestamp): Date/time the workspace was last opened.
- **Validation**:
  - `name`: Must be non-empty, between 1-100 characters.

### WorkspaceList
- **Purpose**: A collection of `Workspace` entities.
- **Type**: `Array<Workspace>`
- **Validation**:
  - Elements MUST be valid `Workspace` objects.

## Relationships
- **WorkspaceList** is a flat list containing zero or more **Workspace** objects.

# Data Model: Workspace Creation Dialog

## Entities

### Workspace (Existing)
- **Purpose**: Represents a project container.
- **Attributes**:
  - `id` (string, UUID): Unique identifier for the workspace.
  - `name` (string): User-defined name for the workspace.
  - `lastAccessed` (timestamp): Date/time the workspace was last opened.
- **Validation**:
  - `name`: Must be non-empty, between 1-100 characters. No leading/trailing whitespace.

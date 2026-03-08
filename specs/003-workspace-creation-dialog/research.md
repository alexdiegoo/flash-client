# Research: Workspace Creation Dialog

## Decision: UI Component Library
- **Selected**: Shadcn UI (Radix UI primitives).
- **Rationale**: User explicitly requested Shadcn components. They provide high-quality, accessible modal (Dialog) and input primitives that integrate seamlessly with Tailwind CSS.
- **Alternatives Considered**: 
  - Headless UI: Rejected (not requested).
  - Native `dialog` element: Rejected (doesn't match project design goals).

## Decision: Form Validation
- **Approach**: Local state-based validation in `WorkspaceCreationDialog` component.
- **Rationale**: The requirement is simple (non-empty name). A full form library like `react-hook-form` is overkill for a single field.
- **Validation Rules**: 
  - Must not be empty.
  - Must not be only whitespace.

## Decision: Storage Integration
- **Approach**: Continue using the existing `src/main/storage.ts` and IPC bridge.
- **Rationale**: Consistency with the current implementation. `getWorkspaces()` and `createWorkspace(name: string)` are already implemented.
- **Updates Needed**: None to the core logic, but the UI must correctly call `window.electronAPI.createWorkspace`.

## Best Practices
- **Accessibility**: Use Shadcn's `Dialog` which handles focus trapping, ARIA roles, and keyboard navigation (Esc to close).
- **Feedback**: Show a validation error message inline if the name is invalid. Disable the "Create" button or show a loading state while the IPC call is in flight.

## Next Steps
- Initialize Shadcn UI using `npx shadcn@latest init`.
- Add components: `dialog`, `input`, `button`, `label`.
- Implement `WorkspaceCreationDialog.tsx`.

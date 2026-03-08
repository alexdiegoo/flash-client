---
description: "Task list for Workspace Creation Dialog implementation"
---

# Tasks: Workspace Creation Dialog

**Input**: Design documents from `/specs/003-workspace-creation-dialog/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Included per project constitution (Rigorous Testing Standards).

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize Shadcn UI and add required components.

- [ ] T001 Initialize Shadcn UI using `npx shadcn@latest init` (configured for Tailwind 4.x)
- [ ] T002 Add Shadcn `dialog` component using `npx shadcn@latest add dialog`
- [ ] T003 [P] Add Shadcn `input` component using `npx shadcn@latest add input`
- [ ] T004 [P] Add Shadcn `button` component using `npx shadcn@latest add button`
- [ ] T005 [P] Add Shadcn `label` component using `npx shadcn@latest add label`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Ensure types and core infrastructure are ready.

- [ ] T006 [P] Verify and update `IElectronAPI` type in `src/renderer/types/electron.d.ts` for consistency

**Checkpoint**: Setup and Foundation ready - UI implementation can now begin.

---

## Phase 3: User Story 1 - Trigger Creation Dialog (Priority: P1)

**Goal**: Show a focused modal dialog when the "Create New Workspace" button is clicked.

**Independent Test**: Click the "Create New Workspace" button on the homepage and verify the modal dialog appears.

### Implementation for User Story 1

- [ ] T007 [US1] Create basic `WorkspaceCreationDialog` component using Shadcn `Dialog` primitives in `src/renderer/components/WorkspaceCreationDialog.tsx`
- [ ] T008 [US1] Replace `window.prompt` logic in `src/renderer/pages/Home.tsx` with the new `WorkspaceCreationDialog` trigger

**Checkpoint**: Dialog trigger is functional.

---

## Phase 4: User Story 2 - Create Workspace via Dialog (Priority: P1) 🎯 MVP

**Goal**: Allow users to enter a name, validate it, and create the workspace, updating the list immediately.

**Independent Test**: Open the dialog, enter a valid name, click "Create", and verify the new workspace appears in the list.

### Tests for User Story 2

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T009 [P] [US2] Unit test for `WorkspaceCreationDialog` form submission and validation in `src/tests/unit/WorkspaceCreationDialog.test.tsx`
- [ ] T010 [P] [US2] E2E test for the complete workspace creation flow in `src/tests/e2e/workspace-creation.spec.ts`

### Implementation for User Story 2

- [ ] T011 [US2] Implement form state and "Name is required" validation in `src/renderer/components/WorkspaceCreationDialog.tsx`
- [ ] T012 [US2] Implement `onCreate` call to `window.electronAPI.createWorkspace` in `src/renderer/components/WorkspaceCreationDialog.tsx`
- [ ] T013 [US2] Ensure `src/renderer/pages/Home.tsx` correctly refreshes the workspace list upon successful creation callback

**Checkpoint**: Core creation flow is fully functional and tested.

---

## Phase 5: User Story 3 - Cancel Creation (Priority: P2)

**Goal**: Allow users to safely close the dialog without any side effects.

**Independent Test**: Open the dialog, enter text, click "Cancel" or press Escape, and verify the dialog closes without creating a workspace.

### Implementation for User Story 3

- [ ] T014 [US3] Add "Cancel" button and handle dialog close state in `src/renderer/components/WorkspaceCreationDialog.tsx`

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final UI refinements and validation.

- [ ] T015 [P] Add Lucide React icons (e.g., `Plus`, `X`) to the dialog in `src/renderer/components/WorkspaceCreationDialog.tsx`
- [ ] T016 [P] Apply custom styling to the validation error message in `src/renderer/components/WorkspaceCreationDialog.tsx`
- [ ] T017 Run `specs/003-workspace-creation-dialog/quickstart.md` validation scenarios

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: Must complete first to have UI components.
- **Phase 2 (Foundational)**: Can run in parallel with Setup but must complete before Phase 3.
- **Phase 3 (US1)**: Depends on Phase 1 & 2.
- **Phase 4 (US2)**: Depends on Phase 3 (dialog must exist and be triggerable).
- **Phase 5 (US3)**: Can run in parallel with US2 as they affect the same file.
- **Phase 6 (Polish)**: Depends on all user stories being functionally complete.

### Parallel Opportunities

- Shadcn component additions (T003, T004, T005) can run in parallel.
- Tests (T009, T010) can be written in parallel with component setup.
- UI polish (T015, T016) can be done together.

---

## Implementation Strategy

### MVP First (User Story 1 & 2)

1. Complete Setup and Foundational tasks.
2. Implement the Dialog trigger (US1).
3. Implement the Creation logic (US2).
4. **STOP and VALIDATE**: Test the creation flow independently.

### Incremental Delivery

1. Setup + Foundation -> Infrastructure ready.
2. Add Dialog Trigger (US1) -> UI shell ready.
3. Add Creation Logic (US2) -> Feature functional (MVP).
4. Add Cancel/Close (US3) -> UX complete.
5. Final Polish -> Feature polished.

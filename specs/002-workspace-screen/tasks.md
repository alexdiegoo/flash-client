---
description: "Task list for Workspace Screen implementation"
---

# Tasks: Workspace Screen

**Input**: Design documents from `/specs/002-workspace-screen/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Included as per implementation plan requirement for unit and integration tests.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create project structure for renderer pages and components in src/renderer/pages and src/renderer/components
- [x] T002 [P] Configure Tailwind 4.x directives and Shadcn base styles in src/renderer/index.css

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T003 Implement Workspace type/interface in src/renderer/types/workspace.ts per data-model.md
- [x] T004 [P] Create storage utility in src/main/storage.ts for local JSON file management
- [x] T005 [P] Setup IPC bridge in src/main/preload.ts exposing getWorkspaces, createWorkspace, and openWorkspace
- [x] T006 Implement IPC handlers in src/main/index.ts connecting storage methods to renderer calls

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - View Workspace List (Priority: P1) 🎯 MVP

**Goal**: Display a list of all existing workspaces on the homepage for quick access.

**Independent Test**: Open the application and confirm that a list of workspaces (mock or real) is displayed on the homepage.

### Tests for User Story 1

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [x] T007 [P] [US1] Unit test for WorkspaceList component in src/tests/unit/WorkspaceList.test.tsx
- [x] T008 [P] [US1] E2E test for workspace list rendering in src/tests/e2e/workspace-list.spec.ts

### Implementation for User Story 1

- [x] T009 [P] [US1] Create WorkspaceItem component in src/renderer/components/WorkspaceItem.tsx
- [x] T010 [US1] Create WorkspaceList component in src/renderer/components/WorkspaceList.tsx (depends on T009)
- [x] T011 [US1] Implement Home page in src/renderer/pages/Home.tsx to fetch and display workspaces via IPC
- [x] T012 [US1] Update App.tsx to route to the Home page as the default screen

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Access Create Workspace (Priority: P2)

**Goal**: Provide a prominent button on the homepage to initiate the creation of a new workspace.

**Independent Test**: Visually confirm the presence of the "Create" button and click it to trigger the creation IPC call.

### Tests for User Story 2

- [x] T013 [P] [US2] Unit test for CreateWorkspaceButton in src/tests/unit/CreateWorkspaceButton.test.tsx
- [x] T014 [P] [US2] E2E test for "Create" button interaction in src/tests/e2e/create-workspace.spec.ts

### Implementation for User Story 2

- [x] T015 [P] [US2] Create CreateWorkspaceButton component in src/renderer/components/CreateWorkspaceButton.tsx
- [x] T016 [US2] Integrate CreateWorkspaceButton into src/renderer/pages/Home.tsx
- [x] T017 [US2] Implement temporary "Create" action in Home.tsx (e.g., prompt for name) to verify createWorkspace IPC functionality

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T018 [P] Add Lucide React icons to WorkspaceItem and CreateWorkspaceButton
- [x] T019 [P] Implement empty state UI in src/renderer/components/WorkspaceList.tsx for first-time users
- [x] T020 [P] Add name truncation for long titles in src/renderer/components/WorkspaceItem.tsx
- [x] T021 [P] Document storage JSON structure in specs/002-workspace-screen/research.md
- [x] T022 Run quickstart.md validation for the entire Workspace Screen feature

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories.
- **User Stories (Phase 3+)**: All depend on Foundational phase completion.
  - User Story 1 (P1) is the MVP and should be prioritized.
  - User Story 2 (P2) can be worked on after T011 is started.
- **Polish (Final Phase)**: Depends on all user stories being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Independent of other stories.
- **User Story 2 (P2)**: Integrates with the Home page created in US1, but the button component itself is independent.

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel.
- All Foundational tasks marked [P] can run in parallel (T003, T004, T005).
- Once Foundational phase completes, US1 and US2 can start in parallel.
- Unit and E2E tests for each story can be developed in parallel.

---

## Parallel Example: User Story 1

```bash
# Launch models and components for User Story 1 together:
Task: "Create WorkspaceItem component in src/renderer/components/WorkspaceItem.tsx"
Task: "Unit test for WorkspaceList component in src/tests/unit/WorkspaceList.test.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently using the E2E test.

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready.
2. Add User Story 1 → Test independently → MVP!
3. Add User Story 2 → Test independently → Feature complete.
4. Apply Polish → Production ready.

---

## Notes

- [P] tasks = different files, no dependencies.
- [Story] label maps task to specific user story for traceability.
- Each user story is independently completable and testable.
- Verify tests fail before implementing (TDD approach recommended for components).

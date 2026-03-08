---
description: "Task list for implementing the View Hello World feature"
---

# Tasks: View Hello World

**Input**: Design documents from `/specs/001-view-hello-world/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/ui-contract.md

**Tests**: Tests are included as per the Project Constitution and Implementation Plan requirements for rigorous testing standards.

**Organization**: Tasks are grouped by phase, with user stories separated to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1)
- Include exact file paths in descriptions

## Path Conventions

- **Electron Main**: `src/main/`
- **React Renderer**: `src/renderer/`
- **Tests**: `src/tests/` (Unit: `unit/`, E2E: `e2e/`)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create project structure per implementation plan (src/main, src/renderer, src/tests)
- [X] T002 [P] Initialize package.json and install core dependencies (electron, react, react-dom, typescript)
- [X] T003 [P] Install and configure Tailwind CSS and Shadcn UI dependencies
- [X] T004 [P] Setup Vitest for unit testing in src/tests/unit/
- [X] T005 [P] Setup Playwright for Electron E2E testing in src/tests/e2e/

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure for Electron and React integration

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T006 Implement Electron main process entry point in src/main/index.ts
- [X] T007 [P] Create basic window management logic in src/main/window.ts
- [X] T008 [P] Setup React renderer entry point and root element in src/renderer/index.tsx
- [X] T009 [P] Configure Tailwind CSS directives in src/renderer/index.css
- [X] T010 [P] Configure Vite/Electron build and dev scripts in package.json

**Checkpoint**: Foundation ready - Electron app can launch a blank React window

---

## Phase 3: User Story 1 - Viewing Centered Greeting (Priority: P1) 🎯 MVP

**Goal**: Display "hello world" in the exact horizontal and vertical center of the screen.

**Independent Test**: Launch the app; verify "hello world" is visible and geometrically centered; resize window and verify it remains centered.

### Tests for User Story 1 (TDD Approach) ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [X] T011 [P] [US1] Create unit test for CenteredGreeting component in src/tests/unit/CenteredGreeting.test.tsx
- [X] T012 [P] [US1] Create E2E test for centering precision and resize behavior in src/tests/e2e/centering.spec.ts

### Implementation for User Story 1

- [X] T013 [P] [US1] Create CenteredGreeting component using Shadcn/Tailwind in src/renderer/components/CenteredGreeting.tsx
- [X] T014 [US1] Integrate CenteredGreeting component into src/renderer/App.tsx
- [X] T015 [US1] Implement dynamic centering using Tailwind flex/grid in src/renderer/App.tsx
- [X] T016 [US1] Verify centering meets 1-pixel margin precision requirement (SC-002)

**Checkpoint**: At this point, User Story 1 should be fully functional and verified by tests

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Final refinements and documentation

- [X] T017 [P] Update project README.md with execution and testing instructions
- [X] T018 [P] Ensure all code passes TypeScript strict checks and linting
- [X] T019 Final validation against all Success Criteria (SC-001 to SC-004)
- [X] T020 [P] Run quickstart.md validation to ensure onboarding flow works

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup (T001-T005) completion.
- **User Story 1 (Phase 3)**: Depends on Foundational (T006-T010) completion.
- **Polish (Phase 4)**: Depends on User Story 1 completion.

### Parallel Opportunities

- T002-T005 can run in parallel.
- T007-T010 can run in parallel.
- T011-T012 (Tests) can be written in parallel.
- T017, T018, T020 can run in parallel.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Setup and Foundational phases to have a running Electron + React app.
2. Implement User Story 1 with TDD (tests first).
3. **STOP and VALIDATE**: Use Playwright to confirm exact centering.

### Incremental Delivery

1. Foundation ready (Window opens).
2. "Hello World" visible.
3. "Hello World" centered.
4. Precision and resize behavior verified.

---

## Notes

- SC-002 (1-pixel margin) is the most critical technical constraint.
- Tailwind `h-screen w-screen flex items-center justify-center` is the recommended approach.
- Ensure Electron `resizable` is set to true to test SC-003.

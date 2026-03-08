# Quickstart: View Hello World

## Prerequisites
- Node.js (Latest LTS)
- npm or yarn

## Setup
1. Clone the repository (if not already done).
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application
To start the Electron application with the React frontend:
```bash
npm start
```

## Running Tests
To verify the "hello world" centering:
```bash
# E2E Tests (Playwright)
npm run test:e2e

# Unit/Integration Tests (Vitest)
npm run test:unit
```

## Validation
- Confirm the application window opens.
- Confirm "hello world" is visible and perfectly centered.
- Resize the window and verify the text remains centered.

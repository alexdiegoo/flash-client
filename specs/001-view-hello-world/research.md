# Research: View Hello World

## Decision: Technology Stack
- **Framework**: Electron + React (TypeScript)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Testing**: Playwright for E2E, Vitest for Unit/Integration

## Rationale
- **Electron + React**: Provides a robust foundation for building cross-platform desktop applications with a modern web frontend.
- **Tailwind CSS**: Enables rapid, utility-first styling, making it extremely efficient to implement perfect centering.
- **Shadcn UI**: Ensures UX consistency and accessibility (a11y) out of the box, adhering to the project constitution.
- **Playwright**: Best-in-class for testing Electron applications, ensuring reliable E2E verification of centering and display.

## Best Practices
- **Centering**: Use Tailwind's `flex items-center justify-center` or `grid place-items-center` on a full-screen container (`h-screen w-screen`).
- **Electron IPC**: While not strictly needed for this feature, the structure should support secure IPC patterns for future expansion.
- **Accessibility**: Ensure the "hello world" text is contained within a landmark (e.g., `<main>`) and has sufficient color contrast.

## Alternatives Considered
- **Vanilla JS/CSS**: Rejected because React provides better component isolation and Shadcn requires React.
- **NW.js**: Rejected in favor of Electron due to larger ecosystem and better tool support for testing.
- **Bootstrap**: Rejected in favor of Tailwind CSS for better control over layout precision.

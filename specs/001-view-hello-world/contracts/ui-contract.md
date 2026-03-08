# UI Contract: View Hello World

## Centered Message Contract

### Interface: CenteredGreeting
- **Display**: The message MUST be positioned in the geometric center of the viewport.
- **Content**: Literal text "hello world".
- **Styling**:
  - Use Tailwind CSS `flex items-center justify-center` or `grid place-items-center`.
  - Container MUST occupy 100% of the viewport height (`100vh`) and width (`100vw`).
- **Behavior**:
  - Re-center immediately on window resize.
  - Performance: Recalculation/re-render SHOULD be <100ms.
- **Accessibility**:
  - Text MUST be wrapped in a semantic landmark (e.g., `<main>`).
  - Font size SHOULD be legible (e.g., `text-2xl` or greater).

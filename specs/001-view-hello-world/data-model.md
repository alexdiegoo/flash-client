# Data Model: View Hello World

## Entities

### Viewport
- **Purpose**: Represents the available display area where the content is rendered.
- **Attributes**:
  - `width` (number): The width of the viewport in pixels.
  - `height` (number): The height of the viewport in pixels.
- **Validation**:
  - MUST be non-negative.
  - MUST dynamically update upon resize events.

### GreetingText
- **Purpose**: The specific string to be displayed.
- **Attributes**:
  - `content` (string): The literal text "hello world".
- **Validation**:
  - MUST match the string "hello world".
  - MUST be displayed in a legible format.

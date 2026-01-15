# Design System Guidance

This document serves as the source of truth for Agents and Developers working on the Design System components.

## Core Principles

### 1. Atomic Design

We strictly follow **Atomic Design** principles to organize our components. Ensure you categorizing components appropriately (Atoms, Molecules, Organisms, etc.).

### 2. Component Composition

We prioritize **Composition** over configuration. Avoid creating monolithic components with excessive props. Instead, break components down into smaller, composable parts that can be assembled by the consumer.

#### Structure Example

When creating a component (e.g., a `Button`), you should export distinct parts that handle specific responsibilities, such as layout (`Wrapper`) and content (`Icon`, `Label`).

**Example: `Button.tsx`**

```tsx
// This represents the button Icon
export function Icon() {}

// This represents the button general shape, like borders and etc, it should hold spacing between items and so on
export function Wrapper() {}
```

#### Usage Pattern

This approach allows for flexible usage where the consumer controls the layout:

```tsx
import * as Button from './Button';

// Usage
<Button.Wrapper>
  <Button.Icon />
  <span>Click Me</span>
</Button.Wrapper>;
```

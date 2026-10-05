# <img src="https://raw.githubusercontent.com/facebook/react/main/fixtures/dom/public/react-logo.svg" width="35" valign="middle" alt="React Logo" /> React Core Concepts

### Part 1: React Basics and JSX
- Introduces foundational React concepts focusing on JSX syntax and basic components.
- Explains element rendering and component composition as modular building blocks.
- Demonstrates passing data from parent to child components using props.

### Part 2: State and Event Handling
- Manages dynamic user interaction using the `useState` hook.
- Covers declaring state variables and handling event actions like clicks and input changes.
- Explains how state updates trigger component re-renders to create interactive interfaces.

### Part 3: Conditional Rendering and Lists
- Focuses on managing dynamic lists and conditional UI elements.
- Demonstrates iterating through data arrays using the JavaScript `map` method with unique `key` props.
- Implements conditional rendering logic using ternary operators and logical `&&` expressions.

### Part 4: Forms and Input Handling
- Manages controlled input elements and form submission logic.
- Binds input fields directly to React state for real-time tracking.
- Handles multi-input form state cleanly and manages submit events securely.

### Part 5: Side Effects and Data Fetching
- Implements the `useEffect` hook for asynchronous operations and API data fetching.
- Controls execution timing using dependency arrays.
- Handles loading states and implements cleanup functions to prevent memory leaks.

### Part 6: Context API and Global State
- Solves prop drilling across deeply nested components using the Context API.
- Implements `createContext` and `useContext` to share global data.
- Demonstrates global state management through a practical theme-switching example.

### Part 7: Custom Hooks
- Encapsulates reusable stateful logic into custom user-defined hooks.
- Abstracts complex asynchronous operations into standalone modules like `useFetch`.
- Promotes clean architecture and code reusability across components.

### Part 8: Performance Optimization
- Optimizes application performance and reduces unnecessary re-renders.
- Caches expensive calculation results using the `useMemo` hook.
- Preserves function references across renders using `useCallback` and `React.memo`.

### Part 9: Uncontrolled Components and Refs
- Interacts directly with the DOM using the `useRef` hook.
- Manages element focus, DOM measurements, and uncontrolled input elements.
- Stores mutable values that persist across renders without triggering UI updates.

### Part 10: Advanced State Management
- Manages complex state transitions using the `useReducer` hook.
- Organizes structured state updates through action types and reducer functions.
- Establishes a foundation for scalable state management architectures like Redux.

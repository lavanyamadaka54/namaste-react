1. props is an object -> props that were passing to a component is like passing arguments to a js function
  whatever props you are passing to a component those will wrap into object

2. config driven ui - the ui rendered based on the data which is coming from backend
3. Whenever you loop over an array/list in React to render elements, you must provide a key prop for each item.

The key should be a unique and stable identifier for that item.

Why key is important:
          key helps React identify which item has changed, been added, or been removed.
          It is used during React’s reconciliation (diffing) process.
With key:
      Suppose 3 elements are already rendered in the DOM.
      If a new element is added, React uses the key to identify:
      which element is new
      which existing elements remain unchanged
      As a result, only the new element is rendered, and the other 3 elements are not re-rendered unnecessarily.

Without key:
    React cannot reliably identify items in the list.
    It may treat items as changed even if they are the same.
    This can cause all elements to re-render or be incorrectly reused, leading to performance issues and UI bugs.

    not using key(not acceptable) <<<<<<<< index as key <<<<<<< unique id as a key(best practice)
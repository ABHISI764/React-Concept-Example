Q1. what is useCallback
Ans. useCallback is a hook in React that is used to memoize functions.
 Memoization is a technique to optimize performance by caching the result
  of expensive function calls and returning the cached result when the same
   inputs occur again. This can be particularly useful in optimizing rendering 
   performance in React components.
* :- The primary purpose of useCallback is to prevent unnecessary re-creation of functions, 
especially when passing functions as props to child components. When a function is recreated
 on every render, it can lead to unnecessary re-renders in child components
 that depend on these functions, even if the function logic itself hasn't changed.


1. It takes a function (the callback) and an array of dependencies.
2. The callback function is only re-created if any of the dependencies in the array change.
3. If the dependencies don't change, useCallback returns the memoized version of the function.
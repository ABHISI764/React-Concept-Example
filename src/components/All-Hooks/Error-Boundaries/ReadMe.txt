// Url : https://www.youtube.com/watch?v=s6-f-OJbgtQ
Q. what is error boundaries
Ans. Error boundaries in React are components 
that catch JavaScript errors anywhere in their child component tree,
log those errors, and display a fallback UI instead of crashing the entire application. 

* :- static getDerivedStateFromError(error): This method is used to update state when an error is caught.
     It should return an object to update the state, which will be used to render a fallback UI.
* :- componentDidCatch(error, errorInfo): This method is called after an error is caught. 
     It can be used to perform side effects, log the error, and update state if needed.
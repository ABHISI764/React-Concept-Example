import React from 'react';
import Counter from './Counter';
import ErrorBoundaries from './ErrorBoundaries';
function App2() {
  return (
    <div style={{alignItems:'center'}}>
      <h1>Lte's understand error</h1>
      <ErrorBoundaries>
      <Counter />
      </ErrorBoundaries>
    </div>
  );
}

export default App2;

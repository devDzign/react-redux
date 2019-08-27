import React from 'react';
import Header from './Header'

function App() {
  return (
      <>
          <Header/>
          <div className="row">
            <div className="col-md-8">
              <h1>Side 8</h1>
            </div>
            <div className="col-md-4">
              <h1>Side 4</h1>
            </div>
          </div>
      </>

  );
}

export default App;

import React from 'react';
import Lookbook from './components/LookBooks';

function App() {
  return (
    <div
      style={{
        display: 'flex !important',
        justifyContent: 'center',  
        alignItems: 'center',      
        height: '100vh',          
        width: '100vw',            
        overflow: 'auto',       
        backgroundColor: '#f8f8f8' ,
        marginLeft : "500px",
        marginRight: "100px",
        marginTop: "100px",
        marginBottom: "100px",
      }}
    >
      <Lookbook />
    </div>
  );
}

export default App;

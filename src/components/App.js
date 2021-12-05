import React from 'react';
import {SocketContext, socket} from '../context/socket'

function App() {
  return (
    <SocketContext.Provider value={socket}>
      
    </SocketContext.Provider>
  );
}

export default App;

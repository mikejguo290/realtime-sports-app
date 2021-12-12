import React from 'react';
import {SocketContext, socket} from '../../context/socket'
import Layout from '../Layout';

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Layout />
    </SocketContext.Provider>
  );
}

export default App;

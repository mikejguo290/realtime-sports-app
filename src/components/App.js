import React from 'react';
import {SocketContext, socket} from '../context/socket'
import Table from './Table';

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Table />
    </SocketContext.Provider>
  );
}

export default App;

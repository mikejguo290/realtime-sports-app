import React from 'react';
import {SocketContext, socket} from '../context/socket'
import Layout from '../components/Layout';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Provider store={store}>
        <Layout />
      </Provider> 
    </SocketContext.Provider>
  );
}

export default App;

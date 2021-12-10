import React from 'react';

import socketio from 'socket.io-client'; // also import {io} ... const socket = io(url);
import { SOCKET_URL } from './config';

export const socket = socketio.connect(SOCKET_URL); //create a socket instance, which connects to url of event emmitter
export const SocketContext = React.createContext(); //create and export the context. 
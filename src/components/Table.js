import React, { useContext, useEffect }from 'react';
import { SocketContext } from '../context/socket';

export default function Table(){

    const socket = useContext(SocketContext);

    const handleUpdate=(args)=>{ // listener function
        console.log(args);
    }
    
    useEffect(()=>{
        // after rendering, add a listener to listen for the event 'data-update'
        socket.on('data-update', handleUpdate);
       
        return ()=>{
            // before component is unmounted, remove all bound event handlers
            socket.off('data-update', handleUpdate);
        }
    },[socket]);
    
    return (
        <h2>Golfers</h2>
    )
}
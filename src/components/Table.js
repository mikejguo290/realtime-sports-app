import React, { useContext, useEffect, useState }from 'react';
import { SocketContext } from '../context/socket';
import DataGridCells from './DataGridCells'
export default function Table(){

    const socket = useContext(SocketContext);
    
    const [ players, setPlayers ] = useState([]);
    const handleUpdate=(data)=>{ // listener function
        // clean the data before saving it to state
        const playerData = {
              ...data,
              id:data.MSTID, // Data grid needs the unique id property to work 
            }
        setPlayers((prevState)=>{
            return [...prevState,playerData]
        });
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
        <>
            <DataGridCells rows={players} />
        </>
    )   
}
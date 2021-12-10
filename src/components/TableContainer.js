import React, { useContext, useEffect, useState }from 'react';
import { SocketContext } from '../context/socket';
import PlayerTable from './PlayerTable'
export default function TableContainer(){

    const socket = useContext(SocketContext);
    
    const [ players, setPlayers ] = useState([]);
    const handleUpdate=(data)=>{ // listener function
        // clean the data before saving it to state
        const playerData = {
              ...data,
              id:data.MSTID, // Data grid needs the unique id property to work 
            }
        setPlayers((prevState)=>{
            // conditional to deal with duplicate player ids. 
            if(!prevState.find(player => player.id === playerData.id)){
                return [playerData, ...prevState] // new player data is placed on top of rows.
            }
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
            <PlayerTable rows={players} />
        </>
    )   
}
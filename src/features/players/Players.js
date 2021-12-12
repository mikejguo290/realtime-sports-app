import React, { useContext, useEffect }from 'react';
import { SocketContext } from '../../context/socket';
import PlayerTable from '../../components/PlayerTable'
import { addPlayer, selectPlayers } from './playersSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Players(){

    const socket = useContext(SocketContext);
    const dispatch = useDispatch(); 
    const players = useSelector(selectPlayers);    
    
    useEffect(()=>{
        // after rendering, add a listener to listen for the event 'data-update'
        const handleUpdate=(data)=>{ // listener function
            dispatch(addPlayer(data));
         }

        socket.on('data-update', handleUpdate);
       
        return ()=>{
            // before component is unmounted, remove all bound event handlers
            socket.off('data-update', handleUpdate);
        }
    },[socket, dispatch]);
    
    return (
        <>
            <PlayerTable rows={players} />
        </>
    )   
}
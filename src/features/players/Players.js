import React, { useContext, useEffect }from 'react';
import { SocketContext } from '../../context/socket';
import PlayerTable from '../../components/PlayerTable'
import { addPlayer, selectPlayers } from './playersSlice';
import {  selectSearch } from '../search/searchSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Players(){
    // passes players filtered by search term to PlayerTable.
    const socket = useContext(SocketContext);
    const dispatch = useDispatch(); 
    const players = useSelector(selectPlayers);
    const search = useSelector(selectSearch);

    const displayedPlayers = players.filter( player => {
        // calculate players filtered by matching to first or last name. startswith.
        const firstName = player.First.toLowerCase();
        const lastName = player.Last.toLowerCase();
        const searchTerm = search.toLowerCase();
        return firstName.startsWith(searchTerm) || lastName.startsWith(searchTerm);
    })
    
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
            <PlayerTable rows={displayedPlayers} />
        </>
    )   
}
import React from 'react';
import Players from '../features/players/Players';
import { Search } from '../features/search/Search'; 
function Layout() {
  return (
    <>  
        <h2>Golf Stats</h2>
        <Search />
        <Players class="tblContainer"/>
    </>
  );
}

export default Layout;
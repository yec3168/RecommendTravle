import React from 'react'
import { useLocation } from 'react-router-dom';

function Board(){
    const location = useLocation();

    //const id = location.state.id;
    //const curRegion = location.state.curRegion;

    return(
        //<div>id는 {id}이고, curRegion은 {curRegion}입니다.</div>
        <div>시작</div>
        
    );
}
export default Board;
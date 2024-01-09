import React from 'react';
import { Tooltip as ReactTooltip}  from 'react-tooltip';

import Map from './map'

function Select(){
    return(
        <>
        <h1 style={{textAlign:"center"}}>지역을 선택하세요.</h1>
        <Map />
        <ReactTooltip id="region" place='right' float="true" variant='warning' />
        </>
    );
}

export default Select;
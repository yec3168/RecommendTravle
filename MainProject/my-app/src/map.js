import React, {useState} from "react";
import {useNavigate  } from "react-router-dom";

import { ReactComponent as SouthKorea } from "@svg-maps/south-korea/south-korea.svg";
import "./path.css"

const sido ={
  "busan":"부산",
  "daegu":"대구",
  "daejeon":"대전",
  "gangwon":"강원",
  "gwangju":"경주",
  "gyeonggi":"경기",
  "incheon":"인천",
  "jeju":"제주",
  "north-chungcheong":"충북",
  "north-gyeongsang":"경북",
  "north-jeolla":"전북",
  "sejong":"세종",
  "seoul":"서울",
  "south-chungcheong":"충남",
  "south-gyeongsang":"경남",
  "south-jeolla":"전남",
  "ulsan":"울산",
}

function Map(){
    const [curRegion, clickRegion] = useState("");
    const [count, setCount] = useState(0)
    const navigate = useNavigate();

    const onMouseHover =(e)=>{
        const koreaName = sido[e.target.id]
        //console.log(koreaName)
        // 호버된 지역의 pathId 
      
        const pathId = document.getElementById(e.target.id)
        pathId?.setAttribute("data-html", 'true')
        pathId?.setAttribute("region", koreaName)
        pathId?.setAttribute("data-tooltip-html",
        `<h3>${koreaName}</h3>`
        )
        pathId?.setAttribute("data-tooltip-id","region")
        
      };
    

    const onclick =(e)=>{
          
        const pathId = document.getElementById(e.target.id)
        const region = pathId?.getAttribute("region")

        clickRegion(region);
        setCount(count +1)
        
        navigate('/home', {state:{
            id : count,
            curRegion: curRegion
        }})
    };

  return(
    <div className= "container">
      <SouthKorea className='map' onClick={onclick} onMouseOver={onMouseHover} data-html = "true" data-tooltip-id="region"/>
      <span style={{textAlign:"center"}}>현재 선택된 지역 : {curRegion}</span>
    </div>
    
  )
}

export default Map;






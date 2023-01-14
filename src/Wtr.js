import React from 'react'
import './App.css';
import { useState } from 'react';
import moment from 'moment/moment';

export default function Wtr({wdata}) {
  // const [data,setData]=useState(wdata)
  console.log(wdata); 
  return (
    <>
    
    <div className="d-flex align-items-center justify-content-center" id='itm'>
          {wdata.map((d,key)=>
            <div className="p-2 m-2  "  id='con'>
            <div className="card text-center" id='conte'>
              <div className="card-body">
                <h5 className="card-title" id='hed'>{moment(d.dt_txt).format('dddd')}</h5>
                <p id='dte'>
                 {moment(d.dt_txt).format('MMMM Do , h:mm:ss a')}
                </p>
                <p id='deg'>{Math.floor(d.main.temp_min-273)}°C</p>
                <p id='d'>{moment(d.dt_txt).format("DD-MM-YY")}</p>
                <p id='des'>{d.weather[0].description}</p>
                </div>
            </div>
          </div>
           )} 

  
  
</div>
    
    
    
    
    </>
  )
}
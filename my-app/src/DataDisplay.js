import axios from 'axios';
import React, {  useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import {Textarea} from "@nextui-org/react";

import { GlobalState } from './App';
export default function DataDisplay() {
  const {id}=useParams();
  const [done,setdone]=useState("");
  useEffect(()=>
  {
    const summary=async()=>
    {
      try {
        const response = await axios.get(`http://172.17.15.189:5000/start/summary?id=${id}`)
        console.log(response.data.summary)
        setdone(response.data.summary);
        alert("Data fetched");
      } catch (error) {
        alert("fail to get data");
      }
    }
    summary();
  },[]);
  return (
    <>
    
    {done?(<div className="mt-4 w-full max-w-xs">
      <h1 className="font-semibold">Summary</h1>
      {/* <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
      <Textarea
        label="Description"
        value={done}
        placeholder="Enter your description (Default autosize)"
      />
      </div> */}

<textarea
  className="p-5 text-black border-2 text-4xl border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-2"
  value={done}
  readOnly
  placeholder="Fetched title"
  style={{ width: '100%', resize: 'both' }}
/>


      
    </div>) :<h1>Loading...</h1>
}
    </>
  );
}

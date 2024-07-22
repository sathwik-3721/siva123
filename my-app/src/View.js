import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
// import { useState } from "react";
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import DataDisplay from './DataDisplay'; 
import DataDisplay1 from "./DataDisplay1";
import { Link, useNavigate } from "react-router-dom";
// Import the new DataDisplay component
import { GlobalState } from "./App";

function View() {
  const [description, setDescription] = useState('Enter key');
  //const [data1, setData1] = useState(null);

  return (
    

    <div className="flex flex-col items-center justify-start h-full w-full bg-gray-300 p-4">
      <div className="w-full">
      <label className="text-black text-4xl ">Enter your URL</label>
      <Input
      isClearable
      type="text"
      // label="enter your url"
      variant="bordered"
      placeholder="Paste link here"
      defaultValue=""
      onClear={() => console.log("input cleared")}
      className="w-full  text-4xl text-lg border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      value={description}
       onChange={(e) => setDescription(e.target.value)}
      />
      </div>
      <div className=" flex flex-row w-full h-max gap-3">
      <Link className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" to={description?`/display/${description}`:"/view"}>Summarise</Link>
      <Link className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" to={description?`/question/${description}`:"/view"}>PlayGround</Link>
      <Link className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" to={description?`/quiz/${description}`:"/view"}>Quizz</Link>
      </div>
    </div>
    
  );
}


export default View;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DataDisplay1() {
  
  let { id } = useParams();
  const [question,setquestion]=useState();
  const [answer,setanswer]=useState();
 
      const getAnswer=async()=>
      {

        try {
          const response = await axios.get(`http://172.17.15.189:5000/start/question?id=${id}&question=${question}`)
          console.log(response.data.answer);
          setanswer(response.data.answer);
          alert("Data fetched");
        } catch (error) {
          alert("fail to get data");
        }
      }
      
      
    return (
      <>
      <div className=' flex flex-col gap-3 w-full h-[20%]'>
      <span className='text-3xl'>Question </span> <input className='w-[60%] h-[30%] text-black text-xl' type="text" placeholder='enter the question' value={question} onChange={(e)=>setquestion(e.target.value)}/>
      <button onClick={()=>getAnswer()}><span className='text-4xl'>Answer</span></button>
      </div>
        {answer?(
        
            <p className='text-3xl'>{answer}</p>
        ):<h1>Loading...</h1>
}
        </>
    );
}

export default DataDisplay1;
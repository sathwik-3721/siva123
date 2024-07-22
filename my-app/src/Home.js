import React from 'react';
// import './index.css'; 
import Image from './himg.avif';


const Home = () => {
  
  return (
    <>
    <div className="absolute z-10 flex w-full h-[80%] items-center justify-center mx-auto mt-4">
     
      <h1 className="text-4xl ml-64 font-bold text-center h-14  text-black from-purple-500 to-gray-500"> &nbsp; WELCOME TO LEARN-EASY</h1>
      
      
     </div>
     <div className="flex left-[14.5rem] items-center justify-center relative w-[80%]">
<img src={Image} alt="Home Background" className="w-[80%] rounded-lg" />
</div>
</>
  );
};
export default Home;
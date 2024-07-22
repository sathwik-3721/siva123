import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css'; 
import './index.css'; 
import Form from './Form';
import View from './View';
import SignUp from './SignUp';
import Quizz from "./components/Quizz";
import {NextUIProvider} from "@nextui-org/react";
import DataDisplay from './DataDisplay';
import DataDisplay1 from './DataDisplay1';
export const GlobalState=createContext();
const App = () => {
  const [login,setlogin]=useState(false);
  const [username,setusername]= useState("");
  const [data,setdata]=useState(null);
  
  return (
    <>
    <NextUIProvider>
    <GlobalState.Provider value={{login,setlogin,username,setusername,data,setdata}}>
    <Router>
      <div className="flex flex-col w-screen h-screen">
        <Header />
        <main className="flex-1 w-full h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Form />} />
            <Route path="/view" element={<View />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/display/:id" element={<DataDisplay/>}/>
            <Route path="/question/:id" element={<DataDisplay1 />} />

              <Route path="/quiz/:id" element={<Quizz/>}/> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </GlobalState.Provider>
    </NextUIProvider>
    </>
  );
};
export default App;
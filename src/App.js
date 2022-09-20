import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import MyNew from './components/MyNew';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let name='mumux';

function App() {
  const[mode,setmode]=useState('light');
  const[alert,setalert]=useState(null);

  const showalert=(message,type)=>{
    setalert({
        mes:message,
        type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
// const removecolor = ()=>{
//   document.body.classList.remove('bg-light');
//   document.body.classList.remove('bg-dark');
//   document.body.classList.remove('bg-warning');
//   document.body.classList.remove('bg-danger');
//   document.body.classList.remove('bg-success');
// }

  const togglemode =() =>{
    // removecolor();
    // document.body.classList.add('bg-'+cls);
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='black';
      showalert(' : dark mode is on','success');
      document.title='dark mode';
      // setInterval(() => {
      //   document.title='dark';
      // }, 2000);
      // setInterval(() => {
      //   document.title='dark-light';
      // }, 1500);
    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor='white';
      //showalert(' : light mode is on : ','sucess');
      document.title='light mode';
    }
  }
  return (
    <>
{/* <Navbar title="myapp" test="About us"></Navbar> */}
<Router>
<Navbar mode={mode} togglemode={togglemode}></Navbar>
<Alert alert={alert}></Alert>
<div className="container my-3">
<Switch>
          <Route path="/about">
          <About></About>
          </Route>
          <Route path="/">
          <TextForm heading="This is my app" mode={mode} showalert={showalert}></TextForm>
          </Route>
        </Switch>
{/* <TextForm heading="This is my app" mode={mode} showalert={showalert}></TextForm> */}
</div>
</Router>
{/* <div className="container my-3">
<About></About>
</div> */}
  {/* <div>
    <MyNew mode={mode}></MyNew>
  </div> */}
    </>
  );
}

export default App;

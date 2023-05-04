import React, { useState, useEffect } from "react";
import Data from '../json/record.json';
import Popup from 'reactjs-popup';
import { FaPencilAlt } from 'react-icons/fa';
import { RiFileCopy2Line } from 'react-icons/ri';
import { ImSearch } from 'react-icons/im';
import { CgMenuGridR } from 'react-icons/cg';
import { BsFillBellFill } from 'react-icons/bs';
import { BsPersonFill } from 'react-icons/bs';
import { MdOutlineLocalLibrary ,MdOutlineWatchLater } from 'react-icons/md';
import { BiStar } from 'react-icons/bi';
import { GrFormAdd } from 'react-icons/gr';
import img1 from '../sidebar/img2.jpeg';
import Form from '../form/form.js';
import './sidebar.css';
const Sidebar = () => {

  const[openModal,setopenModal]=useState(false)
function open(){
  setopenModal(true)
}
function close(){
  setopenModal(true)
}

  return (
    <div className="maincontainer">

    <div className="container">
        <div className="brandname">
        
          <img src={img1}  alt="" />&nbsp; &nbsp;
            <p  style={{ color: 'aquamarine' }}>Custom</p> &nbsp;
            
            <p>Dashboard</p>
        </div>
        <div className="buttonnew">
         <button onClick={open} className="btn"> + &nbsp;  Add</button>
        {openModal && <Form/>}
        <button className="btn2">< FaPencilAlt />&nbsp;  Create</button>
        </div>
        <hr></hr>
        <div className="sections">
        <button className="sectionbtn1"><MdOutlineLocalLibrary size="25px" /> &nbsp; &nbsp; &nbsp;<span>All</span> </button>
        <button className="sectionbtn1"><MdOutlineWatchLater size="25px" /> &nbsp; &nbsp; &nbsp;<span>Recent</span> </button>
        <button className="sectionbtn1"><BiStar size="25px" /> &nbsp; &nbsp; &nbsp;<span>Starred</span> </button>
        </div>

        <hr></hr>
        <div className="sections">
        <button className="sectionbtn1"><RiFileCopy2Line size="25px" /> &nbsp; &nbsp; &nbsp;<span>Test Demo</span> </button>
        <button className="sectionbtn1"><RiFileCopy2Line size="25px" /> &nbsp; &nbsp; &nbsp;<span>Page Builder Demo</span> </button>
        <button className="sectionbtn1"><RiFileCopy2Line size="25px" /> &nbsp; &nbsp; &nbsp;<span>Metabase</span> </button>
        </div>
    </div>
<div className="rightside">
  <div className="navbar">
    <div className="search-bar">
      <input placeholder='Search' id='searchBar' name="searchBar" type="text">
      </input>
      <i><ImSearch color="white"/></i>
    </div>
    <i><CgMenuGridR size="23px" color="white"/></i>
    <i><BsFillBellFill size="23px" color="white"/></i>
    <i><BsPersonFill size="23px" color="white"/></i>
  </div>
  <div className="filtersection">
    <div className="groupname">
      <span>Page Builder Demo </span>
    </div>
    <div className="filtericon">
    <div className="search-bar">
      <input placeholder='Filter' id='searchBar' name="searchBar" type="text">
      </input>
      <i><ImSearch color="gray"/></i>
    </div>
    </div>
  </div>
  <div className="hrp">
  <hr></hr>
  </div>
<div className="jfile">

  {
    Data.map(record=>{
      return(
        <div className="card">
          
      <div className="container1">
      <div className="newstar">
          <BiStar size="25px" /></div>
       <div className="recore">
        <p>{record.dashboard_name}</p> 
       <p>{record.dashboard_group}</p> </div>
      </div>
      </div>
        
      )
    })
  }
  </div>
  
</div>
    </div>
  )
}

export default Sidebar
import React, { useState } from 'react';
import '../components/Dash.css';
import '../App.css';
import Calender from 'react-calendar';
import ToDoList from './toDoList';
import AddToDo from './addToDo';
import Dashboard from '../pages/Dashboard';
import { Link } from 'react-router-dom';


const Dash = () => {
  const [value, onChange] = useState(new Date());

  function myFunction() {
    const x = document.getElementById("Background");
    if(x.style.backgroundColor === "rgb(216, 216, 216)") {
      x.style.backgroundColor = "#212026"
    } else {
      x.style.backgroundColor = "rgb(216, 216, 216)"
    }

  }

  return (
    <div className='Dash'>
      <div className='panelContainer'>
        <div className='leftPanel'>
          <div>
            <div className='Logo'><span><i class="fa-solid fa-briefcase"></i>MOB</span>MED SERVICES</div>
            <div className='leftPanelContent'>
              <ul>
                <li> <Link className='link' to='/'><i class="fa-solid fa-table-columns"></i> Dashboard</Link></li>
                <li> <Link className='link' to='/appointments'><i class="fa-regular fa-calendar-check"></i> Appointments</Link></li>
                <li><Link className='link' to='/activity'><i class="fa-solid fa-chart-line"></i> Activity</Link></li>
                <li> <Link className='link' to='/messages'><i class="fa-solid fa-envelope"></i> Messages</Link></li>
                <li><Link className='link' to='/statistics'><i class="fa-solid fa-square-poll-vertical"></i> Statistic</Link></li>
                <li><Link className='link' to='/settings'><i class="fa-solid fa-gear"></i> Settings</Link></li>
              </ul>
            </div>
            <div className='logOut'><i class="fa-solid fa-arrow-right-from-bracket"></i>Log Out</div>
            <div id='TM' className='ToggleMode'>Light<button onClick={myFunction}>Toggle</button>Dark</div>
          </div>
        </div>

        <Dashboard />

        <div className='rightPanel'>
          <div>
            <div className='Calender'><Calender onChange={onChange} value={value} /></div>
            <div className='toDo'>
              <ToDoList />
              <AddToDo />
            </div>
            <div className='Profile'>Profile</div>
            <div className='Status'>Status</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dash

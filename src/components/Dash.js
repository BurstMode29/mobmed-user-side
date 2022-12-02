import React, { useState } from 'react';
import '../components/Dash.css';
import Calender from 'react-calendar';
import Dashboard from '../pages/Dashboard';
import { Routes, Route, Link } from 'react-router-dom';
import Appointments from '../pages/Appointments';
import Activity from '../pages/Activity';
import Messages from '../pages/Messages';
import Statistics from '../pages/Statistics';
import Settings from '../pages/Settings';
import ToDoList from './toDoList';
import AddToDo from './addToDo';


const Dash = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className='Dash'>
      <div className='panelContainer'>
        <div className='leftPanel'>
          <div>
            <div className='Logo'><span><i class="fa-solid fa-briefcase"></i>MOB</span>MED SERVICES</div>
            <div className='leftPanelContent'>
              <ul>
                <Link className='link' to='/dashboard'><li><i class="fa-solid fa-table-columns"></i> Dashboard</li></Link>
                <Link className='link' to='/appointments'><li><i class="fa-regular fa-calendar-check"></i> Appointments</li></Link>
                <Link className='link' to='/activity'><li><i class="fa-solid fa-chart-line"></i> Activity</li></Link>
                <Link className='link' to='/messages'><li><i class="fa-solid fa-envelope"></i> Messages</li></Link>
                <Link className='link' to='/statistics'><li><i class="fa-solid fa-square-poll-vertical"></i> Statistic</li></Link>
                <Link className='link' to='/settings'><li><i class="fa-solid fa-gear"></i> Settings</li></Link>
              </ul>
            </div>
            <div className='logOut'><i class="fa-solid fa-arrow-right-from-bracket"></i>Log Out</div>
          </div>
        </div>

        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/appointments' element={<Appointments />} />
          <Route path='/activity' element={<Activity />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/statistics' element={<Statistics />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>

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

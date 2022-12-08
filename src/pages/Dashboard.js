import React from 'react';
import { Routes, Route } from 'react-router';
import Activity from './Activity';
import Appointments from './Appointments';
import Home from './Home';
import Messages from '../pages/Messages';
import Statistics from '../pages/Statistics';
import Settings from '../pages/Settings';

function Dashboard() {
  return (

    <div className='middlePanel'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path='/activity' element={<Activity />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/statistics' element={<Statistics />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>

    </div>

  )
}

export default Dashboard

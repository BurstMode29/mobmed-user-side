import React from 'react';
import List from '../components/List';
import '../components/components.css';
import { MenuButton } from '../components/Mobile';

function Appointments() {
  return (
    <div className='Appointments'>
      <div className="Top">
        <div><input type='text' placeholder="Search" /></div>
        <div className="Profile1"></div>
        <MenuButton />
      </div>
      <List />
    </div>
  )
}

export default Appointments

import React from 'react';
import UpcomingAppointments from '../components/UpcomingAppointments';

function Dashboard() {
  return (
    <div>
      <div className='middlePanel'>
        <div>
          <div className='searchBar'>
            <input type='text' placeholder='SEARCH' />
            <i class="fa-sharp fa-solid fa-bell"></i>
          </div>

          <div className='middlePanelInfo1'>
            <div className='upcomingAppointments'>
              <UpcomingAppointments />
            </div>
            <div className='financialStatus'>
              <div className='memberAccess'>Premium<br></br>Access!</div>
            </div>
          </div>

          <div className='middlePanelInfo2'>
            <div className='liveMap'> <div className='memberAccess'>Premium<br></br> Access!</div></div>
            <div className='Messages'> <div className='memberAccess'>Premium<br></br> Access!</div></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard

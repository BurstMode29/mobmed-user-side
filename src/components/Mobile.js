import React from 'react'
import '../components/Mobile.css';
import { Link } from 'react-router-dom';

const menuButton = () => {
  const x = document.getElementById('MobileMenu');
  if (x.style.scale === "0") {
    x.style.scale = "2";
  } else {
    x.style.scale = "0";
  }

}

export const MenuButton = () => {
  return (
    <div>
      <div className='menuButton' onClick={menuButton}><i class="fa-solid fa-bars"></i></div>
    </div>
  )
}

const Mobile = () => {

  return (
    <div>

      <div id='MobileMenu'>
        <div>
          <div className='mobileMenuButton'><MenuButton /></div>
          <div className='mobilePanel'>
            <div>
              <div className='Logo1'><span><i class="fa-solid fa-briefcase"></i>MOB</span>MED SERVICES</div>
              <div className='mobilePanelContent'>
                <ul>
                  <Link className='link' to='/'><li><i class="fa-solid fa-table-columns"></i> Dashboard</li></Link>
                  <Link className='link' to='/appointments'><li><i class="fa-regular fa-calendar-check"></i> Appointments</li></Link>
                  <Link className='link' to='/activity'><li><i class="fa-solid fa-chart-line"></i> Activity</li></Link>
                  <Link className='link' to='/messages'><li><i class="fa-solid fa-envelope"></i> Messages</li></Link>
                  <Link className='link' to='/statistics'><li><i class="fa-solid fa-square-poll-vertical"></i> Statistic</li></Link>
                  <Link className='link' to='/settings'><li><i class="fa-solid fa-gear"></i> Settings</li></Link>
                </ul>
              </div>
              <div className='logOut1'><i class="fa-solid fa-arrow-right-from-bracket"></i>Log Out</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Mobile

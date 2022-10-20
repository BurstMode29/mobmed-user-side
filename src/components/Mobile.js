import React from 'react'
import '../components/Mobile.css';

const Mobile = () => {

  // Mobile Menu

  function MobileMenu() {
    var m = document.getElementById("MobileMenu");
    if (m.style.height === "0%") {
      m.style.height = "100%";
      document.getElementById("PP").style.left = "5px";
      document.getElementById("DI").style.left = "0px";
      document.getElementById("DC").style.left = "0px";
      document.getElementById("DT").style.left = "0px";
    } else {
      m.style.height = "0%"
      document.getElementById("PP").style.left = "-50px";
      document.getElementById("DI").style.left = "-300px";
      document.getElementById("DC").style.left = "-310px";
      document.getElementById("DT").style.left = "-300px";
    }
  }

  // Mobile Menu

  return (
    <div>

      <div className='MobileMenuIcon' onClick={MobileMenu}><i class="fa-solid fa-bars"></i></div>
      <div className='MobileMenu' id='MobileMenu'>
        <div className='ProfilePhoto' id='PP'></div>
        <div className='DashIcons' id='DI'>
          <div className='MobileBell'><i class="fa-sharp fa-solid fa-bell"></i></div>
          <div className='MobileSettings'><i class="fa-solid fa-gear"></i></div>
          <div className='MobileMessaging'><i class="fa-sharp fa-solid fa-comment"></i></div>
        </div>

        <div className='DashCards' id='DC'>
          <div className='DashHeader'>DashBoard</div>
          <div className='Cards'>
            <div className='Revenue'></div>
            <div className='Sales'></div>
            <div className='Cost'></div>
          </div>
        </div>

        <div className='DashTable' id='DT'>
          <div className='TableHeader'>Recent Requests</div>
          <table className='MobileTable'>
            <tr>
              <th>Paitient</th>
              <th>ID</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>jack Frost</td>
              <td>1888 923 8526</td>
              <td>01 February 2022</td>
              <td>Approved</td>
            </tr>
          </table>
        </div>

      </div>

    </div>
  )
}

export default Mobile

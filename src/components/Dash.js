import React from 'react';
import '../components/Dash.css';

const Dash = () => {



  // Desktop Menu
  function openMenu() {
    var x = document.getElementById("Menu");
    if (x.style.right === "100%") {
      x.style.right = "50%";
      x.style.boxShadow = "1px 1px 20px";
    } else {
      x.style.right = "100%";
      x.style.boxShadow = "0px 0px 0px"
    }
  }
  // Desktop Menu


  return (
    <div>
      <div className='SideMenu' id="Menu">

        <div className='ProfilePhoto' id='PP'></div>
        <div className='DashIcons' id='DI'>
          <div className='DesktopBell'><i class="fa-sharp fa-solid fa-bell"></i></div>
          <div className='DesktopSettings'><i class="fa-solid fa-gear"></i></div>
          <div className='DesktopMessaging'><i class="fa-sharp fa-solid fa-comment"></i></div>
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
          <table className='DesktopTable'>
            <div>
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
            </div>

          </table>
        </div>

        <div onClick={openMenu} className='Pull'><a className='DashButton' href='#'><i class="fa-solid fa-chart-simple-horizontal"></i></a></div>
      </div>
    </div>
  )
}

export default Dash

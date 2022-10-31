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
  };
  // Desktop Menu

  // Notifications
  function openNotifactions() {
    var n = document.getElementById("NB");
    if (n.style.left === "-800px") {
      n.style.left = "800px";
    } else {
      n.style.left = "-800px"
    }
  };

  function closeNotifications() {
    var closeNotif = document.getElementById("NB");
    if (closeNotif.style.left === "-800px") {
      closeNotif.style.left = "800px";
    } else {
      closeNotif.style.left = "-800px"
    }
  };
  // Notifications

  return (
    <div>
      <div className='notifBox' id='NB'>
        <div className='CloseNotifications' onClick={closeNotifications}><i class="fa-solid fa-xmark"></i></div>
        <div className='notification' id='notifPop' ></div>
      </div>

      <div className='SideMenu' id="Menu">
        <div className='ProfilePhoto' id='PP'></div>
        <div className='DashIcons' id='DI'>
          <div className='DesktopBell' onClick={openNotifactions}><i class="fa-sharp fa-solid fa-bell" ></i></div>
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

        <div onClick={openMenu} className='Pull'><a className='DashButton' href='#'><i class="fa-sharp fa-solid fa-bars"></i></a></div>
      </div>
    </div>
  )
}

export default Dash

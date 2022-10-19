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
            <div className='Bell'><i class="fa-sharp fa-solid fa-bell"></i></div>
            <div className='ClientInfo'></div>
            <div onClick={openMenu}  className='Pull'><a className='DashButton' href='#'><i class="fa-solid fa-chart-simple-horizontal"></i></a></div>
        </div>
    </div>
  )
}

export default Dash

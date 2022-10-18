import './App.css';
import background from './images/Courier_Mobmed.png';
import menu from './images/paragraph.png';
import chart from './images/pie-chart.png';

function App() {

  // Desktop Menu
  function openMenu() {
    var x = document.getElementById("Menu");
    if (x.style.right === "100%") {
      x.style.right = "50%";
    } else {
      x.style.right = "100%";
    }
  }
  // Mobile Menu

  function MobileMenu() {
    var m = document.getElementById("MobileMenu");
    if (m.style.height === "0%") {
      m.style.height = "100%";
    } else {
      m.style.height = "0%"
    }
  }

  return (
    <div className="App">
   
    
    <div className='SideMenu' id="Menu">
      <div className='Bell'><i class="fa-sharp fa-solid fa-bell"></i></div>
      <div className='Chart'><img src={chart}/></div>
      <div className='ClientInfo'></div>
      <div className='Pull'><a onClick={openMenu} className='Click' href='#'><img src={menu}/></a></div>
    </div>

    <div className='MobileMenuIcon' onClick={MobileMenu}><i class="fa-solid fa-bars"></i></div>
    <div className='MobileMenu' id='MobileMenu'>

    </div>
    
    <div id="Content">

      <div className='Logo'><i class="fa-solid fa-heart-pulse"></i></div>
        <div className='MyComponents'>
          <div className='component-1'></div>
          <div className='component-2'></div>
          <div className='Welcome'>
            <h1>MOBILE MEDICATION</h1>
            <p>
                Welcome user on this platform you can see all your requests and bookings
                  see your reviews, stats and your work history by clicking the buttons.

                          Keep a sharp eye open for any new notifications in
                            the top right and check customer location and 
                                    information on the right.
            </p>
          </div>
          <div className='component-3'></div>
          <div className='component-4'></div>
          <div className='component-5'><div className='Links'><a href='#'><i class="fa-solid fa-user"></i></a><a href='#'><i class="fa-solid fa-list"></i></a><a href='#'><i class="fa-solid fa-folder"></i></a><a href='#'><i class="fa-sharp fa-solid fa-gear"></i></a></div></div>
        </div>
      <div className='background'><div className='Blend'></div><img src={background}/></div>
      <div className='footer'>
          <div className='FooterIcons'><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-instagram"></i></div>
          <div className='FooterText'>© MOBMED | MOBILE MEDICATION</div>
      </div>
    </div>
    </div>
  );
}

export default App;

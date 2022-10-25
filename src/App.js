import './App.css';
// import background from './images/Courier_Mobmed.png';
import Mobile from './components/Mobile';
import Dash from './components/Dash';


function App() {

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

  return (
    <div className="App">
      <Mobile></Mobile>
      <Dash></Dash>
      <div id="Content">
        <div>

          <div className='MobileMenuIcon' onClick={MobileMenu}><i class="fa-solid fa-bars"></i></div>
          <div className='Logo'><i class="fa-solid fa-heart-pulse"></i></div>

          <div className='MyComponents'>
            <div className='ComponentBox-1'><div className='component-1'></div></div>
            <div className='ComponentBox-2'><div className='component-2'></div></div>
            <div className='Welcome'>
              <h1>MOBILE MEDICATION</h1>

              <div className='WelcomeText'>
              <p>
                Welcome user on this platform you can see all your requests and bookings
                see your reviews, stats and your work history by clicking the buttons.

                Keep a sharp eye open for any new notifications in
                the top right and check customer location and
                information on the right.
              </p>
              </div>
            </div>
            <div className='ComponentBox-3'><div className='component-3'></div></div>
            <div className='ComponentBox-4'><div className='component-4'></div></div>
            <div className='ComponentBox-5'><div className='component-5'><div className='Links'><a href='#'><i class="fa-solid fa-user"></i></a><a href='#'><i class="fa-solid fa-list"></i></a><a href='#'><i class="fa-solid fa-folder"></i></a><a href='#'><i class="fa-sharp fa-solid fa-gear"></i></a></div></div></div>
          </div>

          {/* <div className='background'><div className='Blend'></div><img src={background}/></div> */}

          <div className='footer'>
            <div className='FooterIcons'><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-instagram"></i></div>
            <div className='FooterText'>© MOBMED | MOBILE MEDICATION</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

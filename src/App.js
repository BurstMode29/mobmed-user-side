import './App.css';
import background from './images/Courier_Mobmed.png';
import Mobile from './components/Mobile';
import Dash from './components/Dash';

function App() {

  return (
    <div className="App">
    <Mobile></Mobile>
    <Dash></Dash>
    
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

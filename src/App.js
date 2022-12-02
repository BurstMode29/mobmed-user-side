import './App.css';
// import background from './images/Courier_Mobmed.png';
import Mobile from './components/Mobile';
import Dash from './components/Dash';


function App() {

  // Cookie
  // const isNew = localStorage.getItem("has-visited") == null;
  // if (isNew) {
  //   document.write("Hello new user!");
  //   localStorage.setItem("has-visited", "true");
  // } else {
  //   document.write("You have visited before!");
  // }
  // Cookie

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
        </div>
      </div>
    </div>
  );
}

export default App;

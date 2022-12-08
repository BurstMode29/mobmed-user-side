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

  return (
    <div className="App">
      <Mobile></Mobile>
      <Dash></Dash>
    </div>
  );
}

export default App;

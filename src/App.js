import './App.css';
import background from './images/Courier_Mobmed.png';
import logo from './images/user-side-logo.png';
import menu from './images/paragraph.png';
import chart from './images/pie-chart.png';

function App() {
  function openMenu() {
    var x = document.getElementById("Menu");
    if (x.style.right === "100%") {
      x.style.right = "50%";
    } else {
      x.style.right = "100%";
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
    
    <div id="Content">

      <div className='Logo'><img src={logo}/></div>
        <div className='MyComponents'>
          <div className='component-1'></div>
          <div className='component-2'></div>
          <div className='component-3'></div>
          <div className='component-4'></div>
          <div className='component-5'><div className='Links'><a href='#'><i class="fa-solid fa-user"></i></a><a href='#'><i class="fa-solid fa-list"></i></a><a href='#'><i class="fa-solid fa-folder"></i></a><a href='#'><i class="fa-sharp fa-solid fa-gear"></i></a></div></div>
        </div>
      <div className='background'><div className='Blend'></div><img src={background}/></div>

    </div>
    </div>
  );
}

export default App;

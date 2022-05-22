import logo from './amazon.jpeg';
import logo2 from './Apple_logo_black.svg';
import './App.css';
import Case from './ components/case'
import Desktopbtn from './ components/desktopbtn';
import Applebtn from './ components/applebtn';
function App() {
  return (
   <>
    <div className="card1">
      <div className="dateAndLogo"><h1>28/10/2022</h1><img src={logo} alt="Not Found!"/></div>
     <Case />
      <h1>Amazon Gift</h1>
      <h2>Pay</h2>
      <Desktopbtn />
    </div>
    <div className="card2">
    <div className="dateAndLogo"><h1>17 Sep 2020</h1><img src={logo2} alt="Not Found!"/></div>
   <Case />
    <h1>Apple Gift</h1>
    <h2>Payment</h2>
    <Applebtn/>
  </div>
   </>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from './components/AllRoutes';
import Footers from './pages/Footer';
// import Home from './pages/Home';


function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <AllRoutes/>
      
      {/* <Home/> */}
      <Footers/>
    </div>
  );
}

export default App;

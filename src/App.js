import Navigationbar from './Components/Navigationbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "node_modules/video-react/dist/video-react.css"; 
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Certificates from './Pages/Certificates';
import Activities from './Pages/Activities';

function App() {
  return (
    <>
    <Router>
    <Navigationbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about'  Component={About}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/Components' Component={Certificates}/>
        <Route path='/Activities' Component={Activities}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

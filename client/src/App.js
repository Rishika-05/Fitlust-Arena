import './App.css';
import Navbar from "./components/Navbar/Navbar"
import HomeHeader from './components/HomeHeader/HomeHeader';
import CustomPlan from './components/CustomPlan/CustomPlan';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path = "/custom-plans" element = {<CustomPlan/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

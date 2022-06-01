import './App.css';
import Navbar from "./components/Navbar/Navbar"
import HomeHeader from './components/HomeHeader/HomeHeader';
import CustomPlan from './components/CustomPlan/CustomPlan';
import Articles from './components/Articles/Articles'
import ArticlePage from './components/ArticlePage/ArticlePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import  ArticleForm  from './components/ArticleForm/ArticleForm';
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
          <Route exact path = "/articles/training" element = {<Articles/>}/>
          <Route exact path = "/articles/nutrition" element = {<Articles/>}/>
          <Route exact path = "/articles/supplements" element = {<Articles/>}/>
          <Route exact path = "/articles/:id" element = {<ArticlePage/>}/>
          <Route exact path = "/articles/upload" element = {<ArticleForm/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

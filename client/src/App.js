import './App.css';
import Navbar from "./components/Navbar/Navbar"
import HomeHeader from './components/HomeHeader/HomeHeader';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import CustomPlan from './components/CustomPlan/CustomPlan';
import Articles from './components/Articles/Articles'
import ArticlePage from './components/ArticlePage/ArticlePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleForm from './components/ArticleForm/ArticleForm';
import PlanPage from './components/Plans/PlanPage'
import Plan from './components/Plans/Plan'
import { ToastContainer } from 'react-toastify';
import Error404 from './components/Error/Error404';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeHeader />} />
          <Route exact path="/custom-plans" element={<CustomPlan />} />
          <Route exact path="/show-plans" element={<Plan />} />
          <Route exact path="/show-plans/:id" element={<PlanPage />} />
          <Route exact path="/articles/training" element={<Articles />} />
          <Route exact path="/articles/nutrition" element={<Articles />} />
          <Route exact path="/articles/supplementation" element={<Articles />} />
          <Route exact path="/articles/:id" element={<ArticlePage />} />
          <Route exact path="/articles/upload" element={<ArticleForm />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

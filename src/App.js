
import './App.css';
// import Footer from './components/common/Footer';

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<DashboardPage/>} />
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;

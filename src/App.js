import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Router } from "./components/Routes/Routes";
import { BrowserRouter } from "react-router-dom";
import './index.css';

function App() {
  return <>
    <BrowserRouter>
      <div className="app-content">
        <Header/>
        <Router/>
        <Footer/>
      </div>
    </BrowserRouter>
  </>
}

export default App;

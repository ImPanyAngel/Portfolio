import { HashRouter as Router, Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import MoneyManager from "./pages/MoneyManager";
import PasswordManager from "./pages/PasswordManager";

function App() {
  return (
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/MoneyManager" element={<MoneyManager/>}/>
          <Route path="/PasswordManager" element={<PasswordManager/>}/>
        </Routes>
      </Router>
  );
}

export default App;

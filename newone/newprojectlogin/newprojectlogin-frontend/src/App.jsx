import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Mens from './pages/mens2';
import Formalwear from './pages/Formalwear';
import NotFound from './pages/NotFound';
import CasualWear from './pages/CasualWear';
import EthnicWear from './pages/EthnicWear';
import Contact from "./pages/Contact";
import Women from './pages/Women';
import About from "./pages/about";
import ChatBot from "./pages/chatbot";
import ColorLuxury from './pages/ColorLuxury';
import Accessories from './pages/Accessories';
import FemaleFormal from './pages/FemaleFormal';
import FemaleCasual from './pages/FemaleCasual';
import FemaleEthnic from './pages/FemaleEthnic';
import FemaleAccessories from './pages/FemaleAccessories';
import Skincare from './pages/Skincare';


  // ✅ move chatbot to components folder (recommended)

function App() {
  return (
    <Router>
      {/* ✅ Floating chatbot — always visible */}
      <ChatBot />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/formalwear" element={<Formalwear />} />
        <Route path="/casualwear" element={<CasualWear />} />
        <Route path="/ethnicwear" element={<EthnicWear />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/women" element={<Women/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/colorluxury" element={<ColorLuxury />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/femaleformal" element={<FemaleFormal />} />
        <Route path="/femalecasual" element={<FemaleCasual />} />
        <Route path="/femaleethnic" element={<FemaleEthnic />} />
        <Route path="/femaleaccessories" element={<FemaleAccessories />} />
        <Route path="/skincare" element={<Skincare />} />
      </Routes>
    </Router>
  );
}

export default App;

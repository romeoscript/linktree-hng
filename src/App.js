
import './App.css';
import Links from './Links';
import { Routes, Route} from "react-router-dom";
import Contact from './Contact';
import FooterIcon from './FooterIcon';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={ <Links />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <FooterIcon />
    </div>
  );
}

export default App;

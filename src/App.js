
import './App.css';
import Links from './Links';
import { Routes, Route} from "react-router-dom";
import Contact from './Contact';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={ <Links />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
    </div>
  );
}

export default App;

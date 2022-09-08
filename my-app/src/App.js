import './App.css';
import Home from './Home';
import Evento from './Evento'

//Router
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>

        <Route path="/evento/:id" element={<Evento />}>
        </Route>


      </Routes>
      </header>
    </div>
  );
}

export default App;

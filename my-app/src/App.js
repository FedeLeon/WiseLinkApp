import "./App.css";
import Home from "./Home";
import Evento from "./Evento";
import User from "./User";

//Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/evento/:id" element={<Evento />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { Home } from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import { RandomBeer } from "./components/Random-beer";
import { Beers } from "./components/Beers";
import { NewBeer } from "./components/New-beer";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/new-beer" element={<NewBeer />} />
          <Route path="/random-beer" element={<RandomBeer />} />
        </Routes>
      </>
    </div>
  );
}

export default App;

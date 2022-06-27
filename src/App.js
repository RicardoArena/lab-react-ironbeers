import "./App.css";
import axios from "axios";
import { Beers } from "./components/Beers";
import { RandomBeer } from "./components/Random-beer";
import { NewBeer } from "./components/New-beer";

function App() {
  return (
    <div className="App">
      <Beers />
      <RandomBeer />
      <NewBeer />
    </div>
  );
}

export default App;

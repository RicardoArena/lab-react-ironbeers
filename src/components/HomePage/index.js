import { Link } from "react-router-dom";
import BeersImg from "../../assets/beers.png";
import RandomBeerimg from "../../assets/random-beer.png";
import NewBeerimg from "../../assets/new-beer.png";

export function Home() {
  return (
    <>
      <div>
        <Link to={"/beers"}>
          <img src={BeersImg} alt="Beer image" />
        </Link>
        <div>
          <h1> All Beers</h1>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </h5>
        </div>
        <Link to={"/random-beer"}>
          <img src={RandomBeerimg} alt="Random Beer image" />
        </Link>
        <div>
          <h1> Random Beer</h1>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </h5>
        </div>
        <Link to={"/new-beer"}>
          <img src={NewBeerimg} alt=" New Beer image" />{" "}
        </Link>
        <div>
          <h1> New Beer</h1>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </h5>
        </div>
      </div>
    </>
  );
}

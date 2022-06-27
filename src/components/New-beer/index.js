import { Header } from "../Header";
import { Link } from "react-router-dom";
import NewBeerImg from "../../assets/new-beer.png";

export function NewBeer() {
  return (
    <>
      <Header />
      <Link to={"/new-beer"}>
        <img src={NewBeerImg} alt="New Beer Img" />
      </Link>
      <div>
        <h1>All Beers</h1>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </h5>
      </div>
    </>
  );
}

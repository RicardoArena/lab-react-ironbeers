import { Link } from "react-router-dom";
import Homeimg from "../../assets/home.png";

export function Header() {
  return (
    <>
      <Link to={"/"}>
        <img src={Homeimg} alt="Home img" style={{ cursor: "pointer" }} />;
      </Link>
    </>
  );
}

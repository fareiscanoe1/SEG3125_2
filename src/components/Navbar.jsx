import { Link } from "react-router-dom";
import CustomButton from "./Button";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center py-4">
      <Link to="/">
        <h1 className="fs-4 fw-bold">MyRecipeBook</h1>
      </Link>
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/explore-recipes">
          <h1 className="fs-5 me-4 mt-1 nav-head">Explore Recipes</h1>
        </Link>
        <CustomButton btnLink="/share-recipe">Share Recipe</CustomButton>
      </div>
    </nav>
  );
};

export default Navbar;

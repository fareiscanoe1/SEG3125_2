import CustomButton from "../components/Button";
import Testimonials from "../components/Testimonials";
import foodImg from "../images/food.png";

const Home = () => {
  return (
    <div>
      {/* -----Main content----- */}
      <h1 className="main-title text-center fw-bold">
        Discover and Share <br /> Delicious Recipes
      </h1>
      <p className="text-muted fs-5 text-center mt-4">
        Join our community of food lovers and find your next favorite dish.
      </p>
      <div className="text-center mt-4">
        <CustomButton btnLink="/share-recipe">Share Recipe</CustomButton>
      </div>
      <img src={foodImg} alt="food" className="img-fluid mt-5 rounded" />

      {/* ----Testimonials---- */}
      <h1 className="fs-3 mt-5 fw-bolder">What Our Users Are Saying</h1>
      <p className="text-muted fs-5">
        Hear from our community about their favorite recipes and experiences
      </p>
      <Testimonials />
    </div>
  );
};

export default Home;

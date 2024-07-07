import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import ExploreRecipes from "./pages/ExploreRecipes";
import RecipeDetails from "./pages/RecipeDetails";
import ShareRecipe from "./pages/ShareRecipe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WriteReview from "./pages/WriteReview";

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore-recipes" element={<ExploreRecipes />} />
          <Route path="/recipe-details" element={<RecipeDetails />} />
          <Route path="/share-recipe" element={<ShareRecipe />} />
          <Route path="/recipe-feedback" element={<WriteReview />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;

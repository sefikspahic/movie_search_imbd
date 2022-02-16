import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import DetailsScreen from "./components/DetailsScreen";

const Movies = () => {
  return (
    <div className="movies-container">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainScreen />} />
          <Route exact path="/movies/:id" element={<DetailsScreen />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Movies;

import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { Navigation } from "./Navigation";
import { MovieList } from "./features/MovieList";
import { PeopleList } from "./features/PeopleList";
import { PeopleDetails } from "./features/PeopleDetails";
import { MoviePage } from "./features/MoviePage";

const App = () => {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path="movies/:id" element={<MoviePage />} />
          <Route path="people/:id" element={<PeopleDetails />} />
          <Route path="movies" element={<MovieList />} />
          <Route path="people" element={<PeopleList />} />
          <Route path="*" element={<Navigate to="/movies" />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;

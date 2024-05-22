import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieList,
  selectMoviesList,
  selectLoadingStatus,
  selectErrorStatus,
} from "./moviesSlice";
import { LoadingPage } from "../../LoadingPage";
import { ErrorPage } from "../../ErrorPage";
import { MovieTile } from "../../MovieTile";

export const MovieList = () => {
  const dispatch = useDispatch();
  const moviesList = useSelector(selectMoviesList);
  const loadingState = useSelector(selectLoadingStatus);
  const errorState = useSelector(selectErrorStatus);

  useEffect(() => {
    dispatch(fetchMovieList());
  }, [dispatch]);

  if (loadingState) {
    return <LoadingPage />;
  }

  if (errorState) {
    return <ErrorPage />;
  }

  return (
    <ul>
      {moviesList?.map((movie) => (
        <li key={movie.id}>
          <MovieTile {...movie} />
        </li>
      ))}
    </ul>
  );
};

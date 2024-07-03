import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeopleList,
  fetchPeopleSearch,
  selectFetchDataStatus,
  selectPeopleList,
} from "./peopleSlice";
import { LoadingPage } from "../../common/LoadingPage";
import { ErrorPage } from "../../common/ErrorPage";
import { PersonTile } from "../../common/PersonTile";
import {
  StyledMain,
  StyledHeader,
  StyledList,
  StyledItem,
  StyledLink,
} from "../styled";
import { Pagination } from "../../Pagination";
import { useQueryParam } from "../../Navigation/queryParam";
import paginationParamName from "../../Pagination/paginationParamName";
import searchQueryName from "../../Navigation/searchQueryName";

export const PeopleList = () => {
  const dispatch = useDispatch();
  const fetchDataStatus = useSelector(selectFetchDataStatus);
  const peopleList = useSelector(selectPeopleList);
  const page = useQueryParam(paginationParamName) || 1;
  const query = useQueryParam(searchQueryName);

  useEffect(() => {
    const options = {
      query: query,
      page: page,
      type: "person",
    };
    if (query) {
      dispatch(fetchPeopleSearch(options));
    } else {
      dispatch(fetchPeopleList(page));
    }
  }, [page, dispatch, query]);

  return (
    <StyledMain>
      {fetchDataStatus === "loading" && <LoadingPage />}
      {fetchDataStatus === "error" && <ErrorPage />}
      {fetchDataStatus === "success" && (
        <>
          <StyledHeader>Popular people</StyledHeader>
          <StyledList $people>
            {peopleList.map((people) => (
              <StyledItem key={nanoid()}>
                <StyledLink to={`/people/${people.id}`}>
                  <PersonTile
                    poster={`https://image.tmdb.org/t/p/w185/${people.profile_path}`}
                    personName={people.name}
                  />
                </StyledLink>
              </StyledItem>
            ))}
          </StyledList>
          <Pagination />
        </>
      )}
    </StyledMain>
  );
};

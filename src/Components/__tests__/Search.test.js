import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store.js";
import { StaticRouter } from "react-router-dom/server";
import resList from "../../utils/mockData";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(resList);
    },
  });
});

test("Shimmer should load on Homepage", () => {
  const { getByTestId } = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = getByTestId("shimmer");

  expect(shimmer.children.length).toBe(10);

  console.log(shimmer);
});

test("Restaurants should load on Homepage", async () => {
  const { getByTestId } = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(getByTestId("search-btn")));

  const resList = getByTestId("res-list");

  expect(resList.children.length).toBe(15);

  // console.log(shimmer);
});

test("Search for string (food) on Homepage", async () => {
    const { getByTestId, queryByTestId } = render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );
  
    await waitFor(() => expect(queryByTestId("shimmer")).not.toBeInTheDocument());
    await waitFor(() => expect(getByTestId("search-btn")).toBeInTheDocument());
  
    const input = getByTestId("search-input");
  
    fireEvent.change(input, {
      target: {
        value: "food",
      },
    });
  
    const searchBtn = getByTestId("search-btn");
  
    fireEvent.click(searchBtn);
  
    const resList = getByTestId("res-list");
  
    expect(resList.children.length).toBe(4);
  });
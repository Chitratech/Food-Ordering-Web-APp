import { Provider } from "react-redux";
import { render ,waitFor } from "@testing-library/react";
import store from "../../utils/store.js";
import { StaticRouter } from "react-router-dom/server";
import Header from "../Header.js";
import resList from "../../utils/mockData.js";
import RestaurantMenu from "../RestaurantMenu.js"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(resList);
    },
  });
});

test("Add Items to Cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("menu")));

  const addBtn = body.getAllByTestId("addBtn");

  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[2]);

  const cart = body.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart- 2 itemss");
});

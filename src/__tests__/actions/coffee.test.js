import { getAllCoffee } from "../../redux/actions/coffee/getAllCoffee";
import { searchCoffee } from "../../redux/actions/coffee/searchCoffee";
import { getCoffeeByOriginId } from "../../redux/actions/coffee/getCoffeeByOriginId";
import * as actionTypes from "../../redux/actions/actionTypes";

import { mockStore } from "../../setupTests";

jest.mock("../../firebase/firebase.js", () => ({
  db: {
    collection: () => ({
      get: jest.fn().mockReturnValue({
        docs: [],
      }),
      doc: jest.fn(() => ({
        get: jest.fn().mockReturnValue({
          data: jest.fn(() => Promise.resolve(true)),
        }),
      })),
    }),
  },
}));

describe("coffee actions", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  it("should search a coffee", () => {
    const coffeeText = "Peru";
    const expectedAction = {
      type: actionTypes.SEARCH_COFFEE,
      payload: coffeeText,
    };

    expect(searchCoffee(coffeeText)).toEqual(expectedAction);
  });

  it("should return coffee by origin id", () => {
    expect.assertions(1);
    return store.dispatch(getCoffeeByOriginId()).then(() => {
      const action = store.getActions();

      const expectedAction = {
        type: actionTypes.GET_COFFEE_BY_ORIGIN,
      };

      expect(action[0]).toEqual(expectedAction);
    });
  });

  it("should return all coffee", () => {
    expect.assertions(1);

    return store.dispatch(getAllCoffee()).then(() => {
      const action = store.getActions();

      const expectedAction = {
        type: actionTypes.GET_ALL_COFFEE,
        payload: [],
      };

      expect(action[0]).toEqual(expectedAction);
    });
  });
});

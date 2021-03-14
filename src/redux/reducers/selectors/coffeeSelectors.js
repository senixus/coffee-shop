import { createSelector } from "reselect";

const selectAllCoffee = (state) => state.coffee.coffee;

export const selectCoffee = createSelector([selectAllCoffee], (coffee) => {
  return coffee;
});

export const selectLowestPrice = (action) =>
  createSelector([selectCoffee], (coffee) => {
    if (action === "lowest price") {
      return coffee.sort((a, b) => a.price - b.price);
    }
  });

export const selectHighestPrice = (action) =>
  createSelector([selectCoffee], (coffee) => {
    if (action === "highest price") {
      return coffee.sort((a, b) => a.price - b.price).reverse();
    }
  });

export const selectAlphabetic = (action) =>
  createSelector([selectCoffee], (coffee) => {
    if (action === "name") {
      return coffee.sort((a, b) => a.coffeeName.localeCompare(b.coffeeName));
    }
  });

export const selectReverseAlphabetic = (action) =>
  createSelector([selectCoffee], (coffee) => {
    if (action === "name reverse") {
      return coffee
        .sort((a, b) => a.coffeeName.localeCompare(b.coffeeName))
        .reverse();
    }
  });

export const selectSearchCoffee = (action) =>
  createSelector([selectCoffee], (coffee) => {
    return coffee.filter((c) =>
      c.coffeeName.toLowerCase().includes(action.toLowerCase())
    );
  });

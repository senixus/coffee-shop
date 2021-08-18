import { getOrigins } from "../../redux/actions/origins/getOrigins";
import * as actionTypes from "../../redux/actions/actionTypes";
import { mockStore } from "../../setupTests";

jest.mock("../../firebase/firebase.js", () => ({
  db: {
    collection: () => ({
      get: jest.fn().mockReturnValue({
        docs: [],
      }),
    }),
  },
}));

describe("origin action", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  it("should return origins", () => {
    expect.assertions(1);
    return store.dispatch(getOrigins()).then(() => {
      const action = store.getActions();

      const expectedAction = {
        type: actionTypes.GET_ORIGINS,
        payload: [],
      };

      expect(action[0]).toEqual(expectedAction);
    });
  });
});

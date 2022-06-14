const FETCH_CLOTHING = "FETCH_CLOTHING";

const initialState = {
  products: [],
};

const clothingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLOTHING:
      return {
        ...state,
        products: action.products,
      };

    default:
      return state;
  }
};

export const setFetchClothing = (products) => ({
  type: FETCH_CLOTHING,
  products,
});

export default clothingReducer;

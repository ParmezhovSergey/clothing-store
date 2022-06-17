const FETCH_CLOTHING = "FETCH_CLOTHING";
const FILTER_CLOTHING = "FILTER_CLOTHING";

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
    case FILTER_CLOTHING:
      return {
        ...state,
        products: state.products
        .filter(item => item.quantity_available > 0)
      };

    default:
      return state;
  }
};

export const setFetchClothing = (products) => ({
  type: FETCH_CLOTHING,
  products,
});
export const setFilterClothing = () => ({
  type: FILTER_CLOTHING
});

export default clothingReducer;

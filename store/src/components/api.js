import axios from "axios";
import { setFetchClothing } from "./clothingReducer";

export const getProductsApi = () => {
  return async (dispatch) => {
    const response = await axios.get("https://artisant.io/api/products");
    dispatch(setFetchClothing(response.data));
  };
};

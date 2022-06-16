import * as axios from "axios";
import { setFetchClothing } from "./clothingReducer";

export const getProductsApi = () => {
  return async (dispatch) => {
    const response = await axios
      .get("https://artisant.io/api/products")
      .then((res) => res.data);

    dispatch(setFetchClothing(response.data.products));
    console.log(response.data.products);
  };
};

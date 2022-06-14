import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getProductsApi } from "./api";

const Clothing = () => {
  
  const dispatch = useDispatch();
  const clothing = useSelector((state) => state.clothing.products);

  useEffect(() => {
    dispatch(getProductsApi());
  }, []);

  return <div>store {clothing.name}store</div>;
};

export default Clothing;

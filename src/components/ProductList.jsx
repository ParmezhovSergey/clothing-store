import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsApi } from "./api";
import { setFilterClothing } from "./clothingReducer";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.clothing.products);
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    if (!isFilter) {
      dispatch(getProductsApi());
    }
  }, [isFilter]);

  useEffect(() => {
    if (isFilter) {
      dispatch(setFilterClothing());
    }
  }, [isFilter]);

  const getFilter = () => {
    setIsFilter(true);
  };
  const getProducts = () => {
    setIsFilter(false);
  };
  const List = products.map((p) => (
    <ProductCard
      key={p.product_id}
      display_name={p.created_by.display_name}
      initial_price={p.initial_price}
      quantity={p.quantity_available}
    />
  ));
  return (
    <Container>
      <Button
        sx={{ margin: "20px 0 0 0" }}
        variant="contained"
        onClick={getProducts}
      >
        Все товары
      </Button>
      <Button
        sx={{ margin: "20px 0 0 20px" }}
        variant="contained"
        onClick={getFilter}
      >
        товары в наличии
      </Button>
      <Grid container rowSpacing={2} spacing={2} marginTop={3}>
        {List}
      </Grid>
    </Container>
  );
};

export default ProductList;

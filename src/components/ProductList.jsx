import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setProduct(products);
  }, [products]);

  const List = product.map((p) => (
    <ProductCard
      key={p.product_id}
      display_name={p.created_by.display_name}
      initial_price={p.initial_price}
      quantity={p.quantity_available}
    />
  ));
  return (
    <Grid container spacing={2}>
      {List}
    </Grid>
  );
};

export default ProductList;

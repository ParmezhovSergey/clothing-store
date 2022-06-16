import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getProductsApi } from "./api";
import ProductList from "./ProductList";
import Header from "./Header";
import { Container } from "@mui/system";

const Clothing = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.clothing.products);

  useEffect(() => {
    dispatch(getProductsApi());
  }, []);

  // const List = products.map((p) => (
  //   <ProductList
  //     key={p.product_id}
  //     name={p.name}
  //     quantity={p.quantity_available}
  //     product_id={p.product_id}
  //     photo={p.json_nft_data.image}
  //   />
  // ));

  return (
    <div>
      <Header />
      <Container >
        <ProductList products={products} />
      </Container>
    </div>
  );
};

export default Clothing;

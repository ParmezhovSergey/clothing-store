import React from "react";
import ProductList from "./ProductList";
import Header from "./Header";
import { Container } from "@mui/system";

const Clothing = (props) => {
  return (
    <div>
      <Header />
      <Container>
        <ProductList />
      </Container>
    </div>
  );
};

export default Clothing;

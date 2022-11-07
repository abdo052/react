import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../Utilty/SubTitle";
import ProductCard from "./ProductCard";

const CardProductsContainer = ({ title, btntitle, pathText }) => {
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      <Row className="my-2 d-flex justify-content-between">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
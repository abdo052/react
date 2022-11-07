import React from 'react'
import { Container, Row } from 'react-bootstrap';
import cloth from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";
import CategoryCard from './CategoryCard';


const CategoryContainer = () => {
  return (
    <Container> 
      <div className="admin-content-text"> كل التصنيفات </div>  
      <Row className="my-2 d-flex justify-content-between">
        <CategoryCard title="احهزة منزلية" img={cloth} background="#F4DBA4" />
        <CategoryCard title="احهزة منزلية" img={cat2} background="#F4DBA4" />
        <CategoryCard title="احهزة منزلية" img={labtop} background="#0034FF" />
        <CategoryCard title="احهزة منزلية" img={sale} background="#F4DBA4" />
        <CategoryCard title="احهزة منزلية" img={cloth} background="#FF6262" />
        <CategoryCard title="احهزة منزلية" img={pic} background="#F4DBA4" />
        <CategoryCard title="احهزة منزلية" img={cloth} background="#F4DBA4" />
        <CategoryCard title="احهزة منزلية" img={cat2} background="#F4DBA4" />
        <CategoryCard title="احهزة منزلية" img={labtop} background="#0034FF" />
        <CategoryCard title="احهزة منزلية" img={sale} background="#F4DBA4" />
        <CategoryCard title="احهزة منزلية" img={cloth} background="#FF6262" />
        <CategoryCard title="احهزة منزلية" img={pic} background="#F4DBA4" />
        <CategoryCard title="احهزة منزلية" img={cloth} background="#F4DBA4" />
        <CategoryCard title="احهزة منزلية" img={cat2} background="#F4DBA4" />
        <CategoryCard title="احهزة منزلية" img={labtop} background="#0034FF" />
        <CategoryCard title="احهزة منزلية" img={sale} background="#F4DBA4" />
        <CategoryCard title="احهزة منزلية" img={cloth} background="#FF6262" />
        <CategoryCard title="احهزة منزلية" img={pic} background="#F4DBA4" />
      </Row>
    </Container>
  );
}

export default CategoryContainer;
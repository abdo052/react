import React from "react";
import { Row } from "react-bootstrap";
import AdminAllProductsCard from "./AdminAllProductsCard";


const AdminAllProducts = () => {
  return (
    <div>
      <div className="admin-content-text"> ادراة جميع المنجات </div>
      <Row className="justify-content-center">
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard /> 
      </Row>
    </div>
  );
};

export default AdminAllProducts;

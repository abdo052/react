import React from 'react'
import CategoryContainer from '../../component/Category/CategoryContainer'
import Pagination from '../../component/Utilty/Pagination';

const AllCategoryPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer />
      <Pagination />
    </div>
  );
}

export default AllCategoryPage
import React from 'react';
import Header from 'components/common/Header';
import ViewProductFilter from 'components/ViewProducts/ViewProductFilter';
import ViewProductResult from 'components/ViewProducts/ViewProductResult';
const ViewProducts = () => {
  return (
    <>
    <Header/>
    <div className="flex flex-wrap pt-2 lg:pt-20">
        <ViewProductFilter/>
        <ViewProductResult/>

    </div>
    </>
  )};

export default ViewProducts;

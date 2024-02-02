import React from "react";
import ProductToBeShow from "./ProductToBeShow";

const ProductsIntro = () => {
    
  return (
    <>
      <section >
        <div className="md:py-[150px] py-[100px]  h-fit flex lg:flex-row flex-col lg:space-y-0 md:px-3 px-4 space-y-5  lg:space-x-3 space-x-0 items-center justify-around">
          {/* left  */}
          <ProductToBeShow selectedid={1} />
          {/* right  */}
          <ProductToBeShow selectedid={2} />
        </div>
      </section>
    </>
  );
};

export default ProductsIntro;

import React from 'react';
import productdata from '../../data/ProductData';

const ProductToBeShow = ({ selectedid }) => {
    const selectedproduct = productdata.find((item) => item.id === selectedid);


    return (
        <>
            {selectedproduct && (
                <div key={selectedproduct.id} className={`group  ${selectedproduct.bgcolor} h-[275px] max-w-[550px] flex items-center shadow-slate-300 hover:shadow-2xl`}>
                    <div className="flex flex-row px-6 py-10">
                        {/* title */}
                        <div className="flex flex-col font-Playfair font-semibold space-y-6">
                            <h3 className="text-black text-2xl">{selectedproduct.title}</h3>
                            <div className="text-gray-600 mb-4 sm:text-sm text-xs max-w-fit">
                                <p>Shop our selection of organic fresh vegetables at a discounted price. 10% off on all vegetables.</p>
                            </div>
                            <div className={`text-black text-base hover:text-white ${selectedproduct.textcolor} rounded-full py-1 px-6 ${selectedproduct.color} ${selectedproduct.hovercolor} border-2  ${selectedproduct.colorborder} max-w-fit`}>
                                <button>Shop now</button>
                            </div>
                        </div>
                        {/* image */}
                        <div className="flex items-end relative">
                            <img src={selectedproduct.tagimg} alt="sa" className="-z-0 absolute sm:-top-10 sm:-right-5 top-0 right-0" />
                            <img src={selectedproduct.img} width={300} height={300} className=' group-hover:animate-[bounce_1s_ease-in-out_infinite] ' alt="sa" />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductToBeShow;

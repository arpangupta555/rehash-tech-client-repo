import React from 'react';

const ProductCollection = ({ pro, setModProducts }) => {


    return (
        <div>
            <div>
                <div className=' card mr-5 bg-base-100 shadow-xl'>
                    < img src={pro.picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-xl ">Item name: <span className="text-2xl font-semibold tracking-wide">{pro.product_name}</span></h2>
                            <h5 className="text-xl">Sellers-name: <span className="text-2xl font-semibold tracking-wide">{pro.sellers_name}</span> </h5>
                            <h5 className="text-xl">Original Price: <span className="text-2xl font-semibold tracking-wide"> {pro.original_price}tk </span></h5>
                            <h5 className="text-xl">Resale Price: <span className="text-2xl font-semibold tracking-wide"> {pro.resale_price}tk </span></h5>

                            <h5 className="text-xl">Years of use: <span className="text-2xl font-semibold tracking-wide"> {pro.years_of_use} </span></h5>
                            <h5 className="text-xl">Time: <span className="text-2xl font-semibold tracking-wide">{pro.time} </span></h5>

                        </div>






                        <label htmlFor="booking-modal"
                            className="btn btn-primary"
                            onClick={() => setModProducts(pro)}
                        >Buy this item</label>
                    </div>


                </div >
            </div>
        </div>
    );
};

export default ProductCollection;

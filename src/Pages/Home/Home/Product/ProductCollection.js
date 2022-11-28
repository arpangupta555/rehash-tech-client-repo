import React from 'react';

const ProductCollection = (pro) => {
    console.log(pro)
    return (
        <div>
            <div>
                <div className=' card mr-5 bg-base-100 shadow-xl'>
                    < img src={pro.pro.picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">Items-name:{pro.pro.product_name}</h2>
                            <h5 className="text-xl">Sellers-name: <span className="text-2xl font-semibold tracking-wide">{pro.pro.sellers_name}</span> </h5>
                            <h5 className="text-xl">Original Price: <span className="text-2xl font-semibold tracking-wide"> {pro.pro.original_price}tk </span></h5>
                            <h5 className="text-xl">Resale Price: <span className="text-2xl font-semibold tracking-wide"> {pro.pro.resale_price}tk </span></h5>

                            <h5 className="text-xl">Year of use: <span className="text-2xl font-semibold tracking-wide"> {pro.pro.years_of_use} </span></h5>
                            <h5 className="text-xl">Time: <span className="text-2xl font-semibold tracking-wide">{pro.pro.time} </span></h5>

                        </div>




                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Buy the item</button>
                    </div>


                </div >
            </div>
        </div>
    );
};

export default ProductCollection;

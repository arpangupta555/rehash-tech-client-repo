import React from 'react';

const ServiceCollection = (product) => {
    console.log(product)
    return (
        <div>

            <div className="flex border-b border-opacity-20 dark:border-white-700 dark:bg-gray-500">
                <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
                    <input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box0" />
                </div>
                <div className="flex-1 px-2 py-3 sm:p-3">
                    <p>{product.product.sellerName}</p>
                </div>
                <div className="flex-1 px-2 py-3 sm:p-3">
                    <p>{product.product.email}</p>
                </div>

                <div className="flex-1 px-2 py-3 sm:p-3">
                    {product.product.productName}
                </div>
                <div className="flex-1 px-2 py-3 sm:p-3">
                    {product.product.phoneNo}
                </div>
                <div className="flex-1 px-2 py-3 sm:p-3">
                    {product.product.location}
                </div>
                {/* <div className=' card mr-5 bg-base-100 shadow-xl'>

                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{product.product.sellerName} </h2>

                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Read more</button>
                </div>
            </div > */}
            </div>
        </div>
    );
};

export default ServiceCollection;
import React from 'react';

const ServiceCollection = (product) => {
    console.log(product)
    return (
        <div>
            <div className=' card mr-5 bg-base-100 shadow-xl'>
                < img src={product.product.picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{product.product.title}</h2>

                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Read more</button>
                </div>
            </div >
        </div>
    );
};

export default ServiceCollection;
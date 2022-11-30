import React, { useEffect, useState } from 'react';
import ServiceCollection from './ServiceCollection';

const Service = () => {


    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch('https://rehash-tech-server.vercel.app/buyProduct')
            .then(res => res.json())
            .then(data => setProducts(data))



    }, [])
    return (
        <div>

            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Emails</h2>
                <div className="flex flex-col overflow-x-auto text-xs">
                    <div className="flex text-left dark:bg-gray-700">
                        <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
                            <input type="checkbox" name="All" className="w-3 h-3 rounded-sm accent-violet-400" />
                        </div>
                        <div className="flex-1 px-2 py-3 sm:p-3">Seller Name</div>
                        <div className="flex-1 px-2 py-3 sm:p-3">Email</div>
                        <div className="flex-1 px-2 py-3 sm:p-3">Product Name</div>
                        <div className="flex-1 px-2 py-3 sm:p-3">Phone no</div>
                        <div className="flex-1 px-2 py-3 sm:p-3">Location</div>

                    </div>




                    {

                        products.map(product => <ServiceCollection
                            key={product._id}
                            product={product}

                        ></ServiceCollection>)

                    }



                </div>
            </div>













        </div>
    );
};

export default Service;
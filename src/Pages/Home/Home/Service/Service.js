import React, { useEffect, useState } from 'react';
import ServiceCollection from './ServiceCollection';

const Service = () => {


    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/buyProduct')
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
                    {/* <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
                            <input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box0" />
                        </div>
                        <div className="w-32 px-2 py-3 sm:p-3">
                            <p>Tracy Kim</p>
                        </div>
                        <div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">An cum minimum voluptua repudiandae, nec illum essent et. Id tibique voluptatum per, eos eu civibus mnesarchum intellegam. An mundi detracto usu, diceret deserunt lobortis te cum.</div>
                        <div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block dark:text-gray-400">
                            <p>5min ago</p>
                        </div> */}


                </div>
            </div>












            {/* <div className='text-center'>
                <h1 className='text-5xl my-8 text-black'>Our <span className='text-amber-500'>Services</span>    </h1> </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 ml-5'>

                {

                    products.map(product => <ServiceCollection
                        key={product._id}
                        product={product}

                    ></ServiceCollection>)

                }
            </div>
            <div className="card-actions justify-end mx-5 my-5">


            </div> */}
        </div>
    );
};

export default Service;
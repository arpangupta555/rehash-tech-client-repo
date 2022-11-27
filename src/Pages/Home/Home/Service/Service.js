import React, { useEffect, useState } from 'react';
import ServiceCollection from './ServiceCollection';

const Service = () => {


    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/productCollection')
            .then(res => res.json())
            .then(data => setProducts(data))



    }, [])
    return (
        <div>
            <div className='text-center'>
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


            </div>
        </div>
    );
};

export default Service;
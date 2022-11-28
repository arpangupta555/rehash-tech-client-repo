import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCollection from './ProductCollection';

const Product = () => {
    const single = useLoaderData();

    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 ml-5'>

                {

                    single.map(pro => <ProductCollection
                        key={pro._id}
                        pro={pro}

                    ></ProductCollection>)

                }
            </div>
        </div>
    );
};

export default Product;
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import ProductCollection from './ProductCollection';



const Product = () => {
    const single = useLoaderData();
    const [modproducts, setModProducts] = useState(null);
    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 ml-5'>

                {

                    single.map(pro => <ProductCollection
                        key={pro._id}
                        pro={pro}
                        setModProducts={setModProducts}

                    ></ProductCollection>)

                }
            </div>
            {
                modproducts &&
                <BookingModal
                    modproducts={modproducts}
                    setModProducts={setModProducts}
                ></BookingModal>}
        </div>
    );
};

export default Product;
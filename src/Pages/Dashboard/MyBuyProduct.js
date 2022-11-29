import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const MyBuyProduct = () => {

    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/buyProducts?email=${user.email}`

    const { data: buyProduct = [] } = useQuery({

        queryKey: ['buyProduct', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }


    })



    return (
        <div>
            <h2 className="text-3xl mb-5">My Added Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Meeting Location</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyProduct.map((sigProduct, i) => <tr>
                                <th>{i + 1}</th>
                                <td>Name</td>
                                <td>Product Name</td>
                                <td>Price</td>
                                <td>Meeting Location</td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBuyProduct;
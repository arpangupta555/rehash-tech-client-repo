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
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }


    })




    return (
        <div>
            <h2 className="text-3xl mb-5">My Order Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product image</th>
                            <th>Buyer Name</th>
                            <th>Product Name</th>
                            <th>Seller Name</th>
                            <th>Price</th>
                            <th>Meeting Location</th>
                            <th>Phone No</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyProduct.map((sigProduct, i) => <tr key={sigProduct._id}>
                                <th>{i + 1}</th>
                                <td>


                                    <div className="avatar">
                                        <div className="w-32 rounded">
                                            <img src={sigProduct.picture} alt='' />
                                        </div>
                                    </div>

                                </td>
                                <td>{sigProduct.buyerName}</td>
                                <td>{sigProduct.productName}</td>
                                <td>{sigProduct.sellersName}</td>
                                <td>{sigProduct.price} tk</td>
                                <td>{sigProduct.location}</td>
                                <td>{sigProduct.phoneNo}</td>

                                <td><button className='btn btn-xs btn-warning'>Pay</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBuyProduct;
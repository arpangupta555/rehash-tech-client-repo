import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Context/AuthProvider';

const BookingModal = ({ modproducts, setModProducts }) => {


    const { product_name, resale_price, sellers_name, picture } = modproducts;
    const { user } = useContext(AuthContext)

    const handleBuy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const productName = form.productName.value;
        const sellersName = form.sellersName.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            buyerName: name,
            email: email,
            productName: productName,
            price: price,
            sellersName: sellersName,
            phoneNo: phone,
            location: location,
            picture: picture,

        }

        console.log(booking)

        fetch('https://rehash-tech-server.vercel.app/buyProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setModProducts(null);
                    toast.success('Product Booked')
                }
                else {
                    toast.error(data.message);
                }
            })





    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-5">{product_name}</h3>
                    <form onSubmit={handleBuy}>
                        <input name="name" defaultValue={user?.displayName} disabled type="text" placeholder="Your Name" className="input mb-2 w-full input-bordered" required />
                        <input name="email" defaultValue={user?.email} disabled type="email" placeholder="Email Address" className="input mb-2 w-full input-bordered" required />
                        <input name="sellersName" defaultValue={sellers_name} disabled type="email" placeholder="seller Name" className="input mb-2 w-full input-bordered" required />
                        <input name="productName" defaultValue={product_name} disabled type="text" placeholder="Item-name" className="input mb-2 w-full input-bordered" />
                        <input name="price" defaultValue={resale_price} disabled type="text" placeholder="Price" className="input mb-2 w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input mb-2 w-full input-bordered" required />
                        <input name="location" type="text" placeholder="Location" className="input mb-2 w-full input-bordered" required />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
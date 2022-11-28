import React from 'react';

const BookingModal = ({ modproducts }) => {
    const { product_name } = modproducts;
    console.log(modproducts)
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product_name}</h3>
                    <p className="py-4"></p>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
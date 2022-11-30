import { data } from 'autoprefixer';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const product = {
                        product_name: data.name,

                        category_id: data.category,
                        picture: imgData.data.url,

                        sellers_name: data.sellerName,
                        location: data.location,
                        original_price: data.orprice,
                        condition: data.condition,
                        resale_price: data.reprice,
                        years_of_use: data.year,
                        time: data.time

                    }

                    fetch('https://rehash-tech-server.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);

                        })



                }
            })
    }
    return (
        <div >
            <h2 className='text-3xl text-center'>Add Product</h2>
            <div className='h-[900px] flex justify-center items-center'>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Seller Name</span></label>
                        <input type="text" {...register("sellerName", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Select Condition</span></label>
                            <select {...register("condition", {
                                required: true
                            })} className="select select-bordered w-full max-w-xs">


                                <option >Excellent</option>
                                <option >Good</option>
                                <option >Fair</option>
                            </select>
                        </div>

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text" {...register("location", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Original Price</span></label>
                        <input type="text" {...register("orprice", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Resale Price</span></label>
                        <input type="text" {...register("reprice", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Years of use</span></label>
                        <input type="text" {...register("year", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Time</span></label>
                        <input type="text" {...register("time", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Select Category</span></label>
                        <select {...register("category", {
                            required: true
                        })} className="select select-bordered w-full max-w-xs">

                            <option value={'6382d7367a7542d260ff1baf'}>Iphone</option>
                            <option value={'6382d7367a7542d260ff1bb0'}>Samsung</option>
                            <option value={'6382d7367a7542d260ff1bb1'}>Xiaomi</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="file" {...register("image", {
                            required: "Photo is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                    </div>

                    <input className='btn btn-accent  mt-4' value="Submit" type="submit" />
                    {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
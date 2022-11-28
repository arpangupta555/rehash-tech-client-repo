import React from 'react';
import { Link } from 'react-router-dom';

const HomeCategories = (service) => {
    console.log(service.service)


    return (
        <div className=' card mr-5 bg-base-100 shadow-xl'>
            < img src={service.service.picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{service.service.title}</h2>
                    <p className="dark:text-black-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                </div>
                <Link to={`/category/${service.service._id}`}><button className="btn btn-primary">Details</button></Link>
            </div>
        </div >
    );
};

export default HomeCategories;
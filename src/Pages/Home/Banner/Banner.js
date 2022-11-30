import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className=" dark:text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <a rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
                    <img src="https://blog.power-lab.eu/wp-content/uploads/sites/10/2021/07/Marketplaces-growth-and-trends.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5 dark:bg-gray-900">
                        <h3 className="text-3xl  font-semibold sm:text-4xl">Rehash-Tech </h3>
                        <h3 className="text-2xl  font-semibold sm:text-4xl">Your wallet friendly sale!</h3>

                        <p>Rehash-tech is the right market for used and brand new mobile phones where you will find out the best quality second-hand mobile phones along with the latest brand new phones that you are looking for. Sellers of mobile phones can also increase their sales on Rehash-tech.</p>
                    </div>
                </a>


            </div>
        </section>
    );
};

export default Banner;
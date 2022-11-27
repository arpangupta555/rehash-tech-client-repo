import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className=" dark:text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <a rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
                    <img src="https://blog.power-lab.eu/wp-content/uploads/sites/10/2021/07/Marketplaces-growth-and-trends.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5 dark:bg-gray-900">
                        <h3 className="text-2xl  font-semibold sm:text-4xl">Noster tincidunt reprimique ad pro</h3>

                        <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                    </div>
                </a>


            </div>
        </section>
    );
};

export default Banner;
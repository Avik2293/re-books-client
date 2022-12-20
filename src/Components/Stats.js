import React from 'react';

const Stats = () => {
    return (
        <section className="px-6 dark:bg-gray-800 dark:text-gray-100 bg-gray-400 mx-2 border rounded-xl">
            <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-4">
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">9K+</p>
                    <p className="text-sm sm:text-base">Customers</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">11K+</p>
                    <p className="text-sm sm:text-base">Followers on social media</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">5K+</p>
                    <p className="text-sm sm:text-base">Books</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">24/7</p>
                    <p className="text-sm sm:text-base">Support</p>
                </div>
            </div>
        </section>
    );
};

export default Stats;
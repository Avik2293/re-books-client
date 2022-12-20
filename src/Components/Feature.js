import React from 'react';

const Feature = () => {
    return (
        <section className="bg-gray-400 m-2 border rounded-xl">
            <div className="lg:flex justify-evenly m-6 lg:my-4">
                <div className="flex">
                    <img className='w-12' src="https://www.rokomari.com/static/200/images/svg/cod-small.svg" alt="cash"></img>
                    <div className="m-2">
                        <p className="uppercase font-bold">Cash on delivery</p>
                        <p>Pay cash at your doorstep</p>
                    </div>
                </div>
                <div className="flex">
                    <img className='w-12' src="https://www.rokomari.com/static/200/images/svg/delivery_icon.svg" alt="service"></img>
                    <div className="m-2">
                        <p className="uppercase font-bold">Delivery</p>
                        <p>All over Country</p>
                    </div>
                </div>
                <div className="flex">
                    <img className='w-12' src="https://www.rokomari.com/static/200/images/svg/happy-return-big.svg" alt="return"></img>
                    <div className="m-2">
                        <p className="uppercase font-bold">Happy return</p>
                        <p>7 days return facility</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
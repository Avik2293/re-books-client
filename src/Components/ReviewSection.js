import React from 'react';

const ReviewSection = () => {
    return (
        <div className='m-4'>
            <section className="my-8">
                <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                    <h1 className="text-3xl font-semibold leading-none text-center">What our users are saying about us</h1>
                </div>
                <div className="container mx-auto grid justify-items-center grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
                    <div data-aos="zoom-in-up" data-aos-duration="2000" className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-6 py-1 text-lg italic">This Website is very good, I find here many books which i cant find outside. Also, huge collection of good seller.</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
                        <p>Avik Sarker</p>
                    </div>
                    <div data-aos="zoom-in-down" data-aos-duration="2000" className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-6 py-1 text-lg italic">Good Website, Good place to find usefull books in low range. User experience also good. Keep it up web team.</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
                        <p>Jhankar Mahboob</p>
                    </div>
                </div>
            </section>
            <div className='lg:flex mx-auto justify-evenly'>
                <div data-aos="zoom-in-right" data-aos-duration="3000" className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex flex-col items-center w-full">
                        <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                        <div className="flex flex-col items-center py-6 space-y-3">
                            <span className="text-center">How was your experience?</span>
                            <div className="flex space-x-3">
                                <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-gray-600">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <textarea rows="3" placeholder="Message..." className="p-1 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                            <button type="button" className="py-2 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400">Leave feedback</button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <a rel="noopener noreferrer" href="0" className="text-sm dark:text-gray-400">Maybe later</a>
                    </div>
                </div>
                <div data-aos="zoom-in-left" data-aos-duration="3000" className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex flex-col w-full">
                        <h2 className="text-3xl font-semibold text-center">Customer reviews</h2>
                        <div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
                            <div className="flex">
                                <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-500">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-500">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-500">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-gray-600">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-gray-600">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                            </div>
                            <span className="dark:text-gray-400">3 out of 5</span>
                        </div>
                        <p className="text-sm dark:text-gray-400">861 global ratings</p>
                        <div className="flex flex-col mt-4">
                            <div className="flex items-center space-x-1">
                                <span className="flex-shrink-0 w-12 text-sm">5 star</span>
                                <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
                                    <div className="dark:bg-orange-300 h-4 w-5/6"></div>
                                </div>
                                <span className="flex-shrink-0 w-12 text-sm text-right">83%</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="flex-shrink-0 w-12 text-sm">4 star</span>
                                <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
                                    <div className="dark:bg-orange-300 h-4 w-4/6"></div>
                                </div>
                                <span className="flex-shrink-0 w-12 text-sm text-right">67%</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="flex-shrink-0 w-12 text-sm">3 star</span>
                                <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
                                    <div className="dark:bg-orange-300 h-4 w-3/6"></div>
                                </div>
                                <span className="flex-shrink-0 w-12 text-sm text-right">50%</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="flex-shrink-0 w-12 text-sm">2 star</span>
                                <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
                                    <div className="dark:bg-orange-300 h-4 w-2/6"></div>
                                </div>
                                <span className="flex-shrink-0 w-12 text-sm text-right">33%</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="flex-shrink-0 w-12 text-sm">1 star</span>
                                <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
                                    <div className="dark:bg-orange-300 h-4 w-1/6"></div>
                                </div>
                                <span className="flex-shrink-0 w-12 text-sm text-right">17%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;
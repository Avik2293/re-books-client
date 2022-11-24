import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');

    const { createUser, updateUserProfile, loading } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            })
    };

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile ={
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error));
    };

    return (
        <div className='flex justify-center m-2'>
            {
                loading ?
                <div className="radial-progress bg-white" style={{ "--value": 70 }}>70%</div>
                :
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form onSubmit={handleSubmit} noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-400">Full Name</label>
                        <input type="text" name="name" id="name" placeholder="Type Your Full Name" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-400"> Photo URL</label>
                        <input type="text" name="photoURL" id="photoURL" placeholder="Your Photo URL" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-400"> Your Email</label>
                        <input type="email" name="email" id="email" placeholder="Type Your Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Type Your Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required />
                        <p>{error}</p>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Register</button>
                </form>
                <p className="text-xs text-center sm:px-6 text-gray-400"> Already have an account?
                    <Link rel="noopener noreferrer" to="/login" className="underline text-gray-100"> Login</Link>
                </p>
            </div>
            }
            
        </div>
    );
};

export default Register;
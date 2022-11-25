import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { Link } from 'react-daisyui';
import toast from 'react-hot-toast';
import Spinner from '../Components/Spinner';


const Login = () => {

    const [error, setError] = useState('');

    const [userEmail, setUserEmail] = useState('');

    const { setUser, providerLogin, signIn, setLoading, passwordResetEmail, loading } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();


    const handleLogIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success(`Welcome Again...${user?.displayName}`);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    const handleEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email);
        console.log(email);
    }

    const handleForgetPassword = () => {
        if (!userEmail) {
            toast.error('Please enter your email address');
            return;
        }
        passwordResetEmail(userEmail)
            .then(() => {
                toast.success('Password reset email has been sent in your email address');
            })
            .catch(error => {
                console.error(error);
            })
    };

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);

                fetch(`http://localhost:5000/users/?email=${user?.email}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data === false) {
                            const newUser = {
                                userName: user.displayName,
                                userEmail: user.email,
                                userImgUrl: user.photoURL,
                                role: "Buyer",
                                verified: false,
                            };
                            fetch('http://localhost:5000/users', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json',
                                },
                                body: JSON.stringify(newUser)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data)
                                    if (data.acknowledged) {
                                        toast.success('You are added as buyer');
                                    }
                                })
                                .catch(er => console.error(er));
                        }
                        else{
                            toast.success(`Welcome Again...${user?.displayName}`);
                        }
                    })

                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    };

    return (
        <div className='flex justify-center m-2'>
            {
                loading ?
                    <Spinner></Spinner>
                    :
                    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
                        <h1 className="text-2xl font-bold text-center">Login</h1>
                        <p>{error}</p>
                        <form onSubmit={handleLogIn} noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-1 text-sm">
                                <label htmlFor="email" className="block text-gray-400"> Your Email</label>
                                <input onBlur={handleEmailBlur} type="email" name="email" id="email" placeholder="Type Your Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="password" className="block text-gray-400">Password</label>
                                <input type="password" name="password" id="password" placeholder="Type Your Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required />
                                <div className="flex justify-end text-xs text-gray-400">
                                    <Link onClick={handleForgetPassword} to="#">Forgot Password?</Link>
                                </div>
                            </div>
                            <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Sign in</button>
                        </form>
                        <div className="flex items-center pt-4 space-x-1">
                            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                            <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
                            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                            </button>
                        </div>
                        <p className="text-xs text-center sm:px-6 text-gray-400"> Don't have an account?<Link onClick={() => navigate('/register')} className="underline text-gray-100 cursor-pointer"> Register</Link></p>
                    </div>
            }
        </div>
    );
};

export default Login;
import {React, useState, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { UserContext } from '../../../context/UserProvider';

const Signup = () => {

const [inputs, setInputs] = useState({
    username: '',
    password: '',
    email: '',
    phone: '',
    first_name: '',
    last_name: '',
})

const history = useHistory();

const { signup } = useContext(UserContext);

return ( 
<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
        <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign Up
            </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={e => { 
            e.preventDefault();
            signup(inputs, history);
            }}>
            <div className="rounded-md shadow-sm -space-y-px">
            <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input id="email-address" value={inputs.email} onChange={e => setInputs(prevState => ({...prevState, email: e.target.value}))} name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>

            <div>
                <label htmlFor="username" className="sr-only">Username</label>
                <input id="username" value={inputs.username} onChange={e => setInputs(prevState => ({...prevState, username: e.target.value}))} name="username" type="text" autoComplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
            </div>

            <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input id="password" value={inputs.password} onChange={e => setInputs(prevState => ({...prevState, password: e.target.value}))} name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
            </div>

            <div>
                <label htmlFor="first_name" className="sr-only">First Name</label>
                <input id="first_name" value={inputs.first_name} onChange={e => setInputs(prevState => ({...prevState, first_name: e.target.value}))} name="first_name" type="text" autoComplete="first-name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="First Name" />
            </div>

            <div>
                <label htmlFor="last_name" className="sr-only">Last Name</label>
                <input id="last_name" value={inputs.last_name} onChange={e => setInputs(prevState => ({...prevState, last_name: e.target.value}))} name="last_name" type="text" autoComplete="last_name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Last Name" />
            </div>

            <div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input id="phone" value={inputs.phone} onChange={e => setInputs(prevState => ({...prevState, phone: e.target.value}))} name="phone" type="text" autoComplete="phone" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Phone Number" />
            </div>

            </div>

            <div className="flex items-center justify-between">

            <div className="text-sm">
                <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                Already Have an Account?
                </Link>
            </div>
            </div>

            <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                </span>
                Sign Up
            </button>
            </div>
        </form>
    </div>
</div>
);
}

export default Signup;

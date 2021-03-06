import {React, useState, useContext} from 'react';
import {UserContext} from '../../../context/UserProvider';
import {useHistory, Link} from 'react-router-dom';

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {login} = useContext(UserContext); 
    const history = useHistory();
    

    return ( 
        <div className="min-h-screen bg-white flex">
    <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div className="mx-auto w-full max-w-sm lg:w-96">
        <div>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Sign in to your account
        </h2>
        
        </div>

        <div className="mt-8">
        <div>

            <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
            </div>
            </div>
        </div>

        <div className="mt-6">
            <form onSubmit={e => {
                e.preventDefault();
                login(username, {password: password}, history, setError);
            }} className="space-y-6">
            <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
                </label>
                <div className="mt-1">
                <input id="username" value={username} onChange={e => setUsername(e.target.value)} name="username" type="text" autoComplete="username" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
            </div>

            <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
                </label>
                <div className="mt-1">
                <input id="password" name="password"  value={password} onChange={e => setPassword(e.target.value)} type="password" autoComplete="current-password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="text-sm">
                <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Don't Have an Account?
                </Link>
                </div>
            </div>

            <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign in
                </button>
                {error !== '' && <p>Error: {error}</p>}
            </div>
            </form>
        </div>
        </div>
    </div>
    </div>
    <div className="hidden lg:block relative w-0 flex-1">
    <img className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixqx=NoqdqpxjtB&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt="" />
    </div>
</div>
    );
}

export default Login;
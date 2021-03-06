import {React, useContext, useEffect, useState} from 'react';
import { UserContext } from '../../context/UserProvider';
import {useHistory} from 'react-router-dom';

const Settings = () => {

    const {user, updateUser, getUser} = useContext(UserContext);
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')));
    
    const history = useHistory();
    const [inputs, setInputs] = useState({
        first_name: userData.first_name || '',
        last_name: userData.last_name || '',
        email: userData.email || '',
        phone: userData.phone || ''
    })


    useEffect(() => {
        getUser(user.username, setUserData);
    }, [])

    return ( <div>
        <div className="pt-8">
    <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
        Edit Profile
        </h3>
        <p className="mt-1 text-sm text-gray-500">
        Use a permanent address where you can receive mail.
        </p>
    </div>
    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
            First name
        </label>
        <div className="mt-1">
            <input type="text" value={inputs.first_name} onChange={e => setInputs(prevInputs => ({...prevInputs, first_name: e.target.value }))} name="first_name" id="first_name" autoComplete="given-name" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
        </div>
        </div>

        <div className="sm:col-span-3">
        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
            Last name
        </label>
        <div className="mt-1">
            <input type="text" value={inputs.last_name} onChange={e => setInputs(prevInputs => ({...prevInputs, last_name: e.target.value }))} name="last_name" id="last_name" autoComplete="family-name" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
        </div>
        </div>

        <div className="sm:col-span-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
        </label>
        <div className="mt-1">
            <input id="email" value={inputs.email} onChange={e => setInputs(prevInputs => ({...prevInputs, email: e.target.value }))} name="email" type="email" autoComplete="email" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
        </div>
        </div>

        <div className="sm:col-span-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
        </label>
        <div className="mt-1">
            <input id="phone" value={inputs.phone} onChange={e => setInputs(prevInputs => ({...prevInputs, phone: e.target.value }))} name="phone" type="text" autoComplete="phone" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
        </div>
        </div>
        
        <div className="sm:col-span-4">
        <button type="button" onClick={() => {
            updateUser(user.id, inputs, history, user.username);
        }} class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Submit Changes
        </button></div>
    

        
    </div>
    </div>
    </div> );
}

export default Settings;

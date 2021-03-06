import {React, useContext, useState} from 'react';
import {UserContext} from '../../context/UserProvider';
import {useHistory} from 'react-router-dom';

const Profile = () => {

    const {deleteUser} = useContext(UserContext);
    const [profileState, setProfileState] = useState(JSON.parse(localStorage.getItem('user')));
    const history = useHistory();

    return ( 
        <div>
        <div>
          <img class="h-32 w-full object-cover lg:h-48" src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80" alt="" />
        </div>
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div class="flex">
              <img class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" src="https://st3.depositphotos.com/13159112/17145/v/600/depositphotos_171453724-stock-illustration-default-avatar-profile-icon-grey.jpg" alt="" />
            </div>
            <div class="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div class="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                <h1 class="text-2xl font-bold text-gray-900 truncate">
              {profileState.first_name} {profileState.last_name}
                </h1>
              </div>
              <div class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button onClick={() => history.push('/settings')} type="button" class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                  <span>Edit Account</span>
                </button>
                <button onClick={() => {
                  deleteUser(profileState.id, history)
                }} type="button" class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                  <span>Delete Account</span>
                </button>
              </div>
            </div>
          </div>
        </div>




        <div class="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Phone
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {profileState.phone}
                </dd>
              </div>

              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Email
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {profileState.email}
                </dd>
              </div>

              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Username
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {profileState.username}
                </dd>
              </div>


            </dl>
          </div>

      </div>
    );
}

export default Profile;

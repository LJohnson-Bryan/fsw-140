import {React, useContext} from 'react';
import {UserContext} from '../../context/UserProvider';
import {
    Link,
    useHistory
} from 'react-router-dom';

const Shell = (props) => {

    
    const { user, logout } = useContext(UserContext);
    const history = useHistory();

    return ( 
            <div>
            {user && <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="hidden md:block">
                                <div className="flex items-baseline space-x-4">

                                <Link to="/home" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                                <Link to="/profile" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Your Profile</Link>
                                <button onClick={() => {
                                    logout();
                                    history.push('/');
                                }} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign-Out</button>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>}
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-4 sm:px-0">
                    <div className="rounded-lg h-96">
                        {props.children}
                    </div>
                </div>
                </div>
            </main>
            </div>
        
    );
}

export default Shell;

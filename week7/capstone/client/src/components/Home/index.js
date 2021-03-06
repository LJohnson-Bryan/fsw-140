import {React} from 'react';
import {Link} from 'react-router-dom'

const Home = (props) => {
    
    return ( 
            <div>
                <p>Welcome!</p>
                <p>Let's goto your <Link to="/profile">profile</Link>!</p>
            </div>
    );
}

export default Home;

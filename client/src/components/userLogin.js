import React, { } from 'react';
import './assets/login.css';
import { Link } from 'react-router-dom';
// import axios from 'axios';

function UserLogin() { // Updated function name to start with an uppercase letter
    // const [userData, setUserData] = useState([]);

    // useEffect(() => {
    //     // Fetch user data from the server when the component is mounted
    //     axios.get('http://localhost:5001/getuser')
    //         .then(response => {
    //             setUserData(response.data);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }, []);

    return (
        <div className='login-section'>
            <div className='login-container'>
                <h3 className='login-heading'>User Login</h3>
                <div className='login-switch'>
                    <Link to='/userLogin' className='user-login'>User Login</Link>
                    <Link to='/adminLogin' className='admin-login'>Admin Login</Link>
                </div>
                <input
                    type='text'
                    name='email'
                    placeholder='Your UserName'
                />

                <input
                    type='password'
                    name='password'
                    placeholder='Your Password'
                />

                <button className='Login-button'>Login</button><br/>
                <div className='login-links'>
                    <Link to='#' className='Forget-pass'>Forget Password</Link>
                    <Link to='/signin' className='Forget-pass'>Don't have an account</Link>
                </div>
            </div>
        </div>
    )
}

export default UserLogin; // Export the component with the updated name

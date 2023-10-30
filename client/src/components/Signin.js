import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './assets/signin.css';
import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function Signin()  {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [file, setFile] = useState('');
    const [password, setPassword] = useState('');
    const [cnfpassword, setCnfpassword] = useState('');
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();

        //create a new formData object
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('file', file);
        formData.append('password', password);
        formData.append('cnfpassword', cnfpassword);


        axios.post('http://localhost:5001/signup',formData)
        .then((result) => {
        console.log(result);
            // toast.success('Sign up successful!');
            navigate('/userLogin')
        }).catch((err) => {
            console.error(err);
            // Handle the error, e.g., display an error message to the user
        });
    };

    return (
        <div className='signin-section'>
            <div className='signin-maincontainer'>
                <form onSubmit={handleSubmit}>
                    <h2 className='signin-heading'>Sign In</h2>
                    <p className='signin-des'>Please Register The Form</p>
                    {/* First Row */}
                    <div className='row'>
                    <input
                        type='text'
                        name='name'
                        placeholder='Enter your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your Email'
                        required
                    />
                    </div>

                    {/* Second Row */}
                    <div className='row-two'>
                    <input
                        type='text'
                        name='phone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder='Enter your Phone'
                        required
                    />

                    <div className="image-upload">
                            <input
                            className='file-text'
                            type="file"
                            onChange={e => setFile(e.target.files[0])}
                            />
                    </div>
                    </div>

                    {/* Third Row */}
                    <div className='row'>
                    <input
                        type='password'
                        name='password'
                        placeholder='Enter your Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <input
                        type='password'
                        name='cnfpassword'
                        value={cnfpassword}
                        onChange={(e) => setCnfpassword(e.target.value)}
                        placeholder='Enter your password again'
                        required
                    />
                    
                    </div>

                    <button className='signin-btn' type='submit'>Register</button><br />
                    <Link to='/userlogin' className='signin-link'>Already i Have a Account</Link>
                </form>
            </div>
        </div>
    )
  
}

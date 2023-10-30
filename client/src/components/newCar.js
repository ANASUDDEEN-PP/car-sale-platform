import React, { useState } from 'react';
import './assets/newCar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function NewCar() {
    const [carname, setCarname] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a new FormData object
        const formData = new FormData();
        formData.append('carname', carname);
        formData.append('model', model);
        formData.append('year', year);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('file', file);

        // Send a POST request with formData
        axios.post('http://localhost:5001/newcar', formData)
        .then((result) => {
            console.log(result);
            // Handle the response or navigate to another page upon successful upload
        })
        .catch((err) => {
            console.error(err);
            // Handle the error, e.g., display an error message to the user
        });
    };
    
    return (
        <div className='newcar-section'>
            <div className='car-main-container'>
                <h3 className='car-main-head'>Upload New Car</h3>
                <form className='car-form' onSubmit={handleSubmit}>

                    {/* First Row */}
                    <div className='car-row'>
                        <input
                            type="text"
                            name="carname"
                            placeholder="Enter Car Name"
                            value={carname}
                            onChange={(e) => setCarname(e.target.value)}
                            // required
                        />

                        <input
                            type='text'
                            name='model'
                            placeholder='Enter Your car Model'
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                            
                        />
                    </div>

                    {/* Second Row */}
                    <div className='car-row'>
                        <input
                            type='number'
                            name='year'
                            placeholder='Enter Manufacture Year'
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            // required
                        />

                        <input
                            type='text'
                            name='description'
                            placeholder='Enter Your Description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            // required
                        />
                    </div>

                    {/* Third Row */}
                    <div className='car-row'>
                        <input
                            type='number'
                            name='price'
                            placeholder='Enter Car Price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            // required
                        />

                        <div className="file-upload">
                            <input
                            className='file-text'
                            type="file"
                            onChange={e => setFile(e.target.files[0])}
                            />
                        </div>
                    </div>
                    <button className='car-button'>Upload</button><br /><br />
                    <Link className='car-link-one' to='/admindashboard'>Back to Admin Dashboard</Link>
                </form>
            </div>
        </div>
    );
}

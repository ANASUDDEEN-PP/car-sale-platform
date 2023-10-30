import React, { Component } from 'react'
import './assets/editCar.css';
import { Link } from 'react-router-dom';

export default class editCar extends Component {
  render() {
    return (
      <div className='editcar-main-section'>
        <div className='editcar-main-container'>
            <h3 className='editcar-heading'>Edit Car Details</h3>
            <form>
                <input
                    type='text'
                    name='editcarname'
                    placeholder='Edit Car Name'
                />    

                <input
                    type='text'
                    name='editmodel'
                    placeholder='Edit Car Model'
                />

                <input
                    type='text'
                    name='edityear'
                    placeholder='Edit Car Year'
                />

                <input
                    type='text'
                    name='editdescription'
                    placeholder='Edit Car Description'
                />

                <div className='last-row'>
                <input
                    type='text'
                    name='editprice'
                    placeholder='Edit Car Price'
                />

                <div className="file-upload">
                    <input
                        className='file-text'
                        type="file"
                        // onChange={e => setFile(e.target.files[0])}
                    />
                </div>
                </div><br />

                <buttons className='editcar-button'>Upload</buttons><br /><br /><br />
                <Link className='editcar-link' to='/admindashboard'>Go back To Dashboard</Link>

            </form>
        </div>
      </div>
    )
  }
}

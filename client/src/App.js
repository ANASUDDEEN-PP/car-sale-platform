import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './components/Home';
import About from './components/about';
import VehicleList from './components/ourVehicle';
import UserLogin from './components/userLogin';
import AdminLogin from './components/adminLogin';
import NotAccess from './components/notFound';
import AdminDashBoard from './components/adminDash';
import SignIn from './components/Signin'
import NewCar from './components/newCar'
import ListCar from './components/listCar'
import EditCar from './components/editCar'
import IndividalCars from './components/individualCars'
import PaymentMethod from './components/paymentPage'
//this is a demo page for my findings
import Demo from './components/demo'


function App() {
  return (
    <Router>
      <div>
      <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vehicleList' element={<VehicleList />} />
          <Route path='/userLogin' element={<UserLogin />} />
          <Route path='/adminLogin' element={<AdminLogin />} />
          <Route path='/admindashboard' element={<AdminDashBoard />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/newcar' element={<NewCar />} />
          <Route path='/listcar' element={<ListCar />} />
          <Route path='/editcar' element={<EditCar />} />
          <Route path='/individualcars' element={<IndividalCars />} />
          <Route path='/paymentpage' element={<PaymentMethod />} />
          
          {/* this is a router for my demo page */}
          <Route path='/demo' element={<Demo />}/>
          <Route path='*' element={<NotAccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

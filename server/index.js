const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path')
const app = express();
app.use(express.json());
app.use(cors());

//mongodb connection
mongoose.connect("mongodb://127.0.0.1:27017/Autoshop");

// Serve static files from the 'public' directory
app.use('./public', express.static('public'));

//import models
const userModel = require('./models/user');
const newcarModel = require('./models/cars');


//file upload storage and file name section
const storage = multer.diskStorage({
  //set image save destination directory
  destination: (req, file, cb) =>{
    cb(null, './public/Images')
  },
  //set up the filemname
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() +  path.extname(file.originalname))
  }
})

const upload = multer({
  storage : storage
})

//end file upload storage



app.post('/adminLogin', (req, res) => {
  //set a constant email and password of a admin
  const hardcodedEmail = 'admin@gmail.com';
  const hardcodedPassword = '1234';


  const { email, password } = req.body;

  // console.log(hardcodedEmail);
  // console.log(hardcodedPassword);

  if (email === hardcodedEmail && password === hardcodedPassword) {
    // Successful login
    // res.status(200).json({ message: 'Login successful' });
    console.log("Signing Successfully");
    // res.status(200).json({ message: 'Login successful' });
  } else {
    // Failed login
    // res.status(401).json({ message: 'Authentication failed' });
    console.log("Something Error");
    res.status(401).json({ message: 'Authentication failed' });
  }

});

//signin API
app.post('/signup', upload.single('file'), (req, res) => {
  
  // Assuming you have a model named newUserModel
  const ourUser = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    imagePath: req.file.path, // This saves the file path in the database
    password: req.body.password,
    confirmPassword: req.body.cnfpassword,
  };

  userModel.create(ourUser)
    .then(user => {
      console.log('New user created:', user);
      res.json(user); // Send a response to the client
    })
    .catch(err => {
      console.error('Error creating a new user', err);
      res.status(500).json({ error: 'An error occurred while creating a user' });
    });
});

// app.get('/getuser', (req, res) => {
//   userModel.find({}, (err, users) => {
//     if (err) {
//       console.error('Error fetching users:', err);
//       res.status(500).json({ error: 'An error occurred while fetching user data' });
//     } else {
//       console.log('Fetched users:', users);
//       res.json(users); // Send the user data as a JSON response
//     }
//   });
// });





//new car API
app.post('/newcar', upload.single('file'), (req, res) => {
  // Assuming you have a model named newcarModel
  const newCarData = {
    carname: req.body.carname,
    model: req.body.model,
    year: req.body.year,
    description: req.body.description,
    price: req.body.price,
    imagePath: req.file.path, // This saves the file path in the database
  };

  newcarModel.create(newCarData)
    .then(newCar => {
      console.log('New car created:', newCar);
      res.json(newCar); // Send a response to the client
    })
    .catch(err => {
      console.error('Error creating new car:', err);
      res.status(500).json({ error: 'An error occurred while creating a new car' });
    });
});

// Get the car details
app.get('/getcars', (req, res) => {
  // Assuming you have a model named newcarModel
  newcarModel.find({})
    .then(cars => {
      // Send the car data, including image paths, to the client
      res.json(cars);
    })
    .catch(err => {
      console.error('Error fetching car data:', err);
      res.status(500).json({ error: 'An error occurred while fetching car data' });
    });
});


//sigin details




const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

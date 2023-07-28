import React, { useState } from 'react';
// import '../css/register.css';
import { useNavigate } from 'react-router-dom';
// import { adduser } from '../
// import { adduser } from '../service/Api.js';
import { adduser } from '../loginpage/api';
import { Link } from 'react-router-dom';
// import '../css/register.css';
// import axios from 'axios';
function SignUp () {
  const navigate = useNavigate();
  // const [signupFirstName, setSignupFirstName] = useState('');
  // const [signupLastName, setSignupLastName] = useState('');
  // const [signupEmail, setSignupEmail] = useState('');
  // const [signupPassword, setSignupPassword] = useState('');


  // const handleSignup = (e) => {
  //   e.preventDefault();
  //   // Perform signup authentication logic here

  //   // Example: Check if signup data is valid
  //   if (signupFirstName.trim() === '') {
  //     alert('Please enter a First name.');
  //     return;
  //   }
  //   if (signupLastName.trim() === '') {
  //     alert('Please enter a Last name.');
  //     return;
  //   }

  //   if (signupEmail.trim() === '' || signupPassword.trim() === '') {
  //     alert('Please enter valid signup credentials.');
  //     return;
  //   }

  //   // Navigate to the authenticated page on successful signup
  //   navigate('/Dashboard');
  // };

  const [formdata, setFormdata] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }
  )

  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
    console.log(formdata);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const res = await adduser(formdata);
    // const res = await axios.post(`http://localhost:9999/set`,formdata);
      console.log(`${res.status}    ${res.data}`);
      
      // navigate('/home');
      navigate('/sign-in');
      
    }
    catch (error) {
      console.log(error);
    }

    console.log(formdata);
  }

  return (
    <div className='si'>
      <div className='ss'>
        <form className="signup-form" onSubmit={handleSubmit}>
          <h7>Sign Up</h7>
          <input
            className="in"
            type="text"
            placeholder="First Name"
            // value={signupFirstName}
            id='firstname'
            // onChange={(e) => setSignupFirstName(e.target.value)}
            onChange={handleChange}
            required
          />
          <br></br>
          <input
            className="in"
            type="text"
            placeholder="Last Name"
            // value={signupLastName}
            id='lastname'
            // onChange={(e) => setSignupLastName(e.target.value)}
            onChange={handleChange}
            required
            />
            <br></br>
          <input
            className="in"
            type="email"
            placeholder="Email"
            // value={signupEmail}
            id='email'
            // onChange={(e) => setSignupEmail(e.target.value)}
            onChange={handleChange}
            required
            />
            <br></br>
          <input
            className="in"
            type="password"
            placeholder="Password"
            // value={signupPassword}
            id='password'
            // onChange={(e) => setSignupPassword(e.target.value)}
            onChange={handleChange}
            required
            />
            <br></br>
          {/* <Link to='/home'><button className="b" type='submit'>Sign Up</button></Link> */}
          <button className="b" type='submit'>Sign Up</button>
          <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
        </form>
      </div>
    </div>
  );

}
export default SignUp;

















// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


// export default class SignUp extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       firstName: '',
//       lastName: '',
//       email: '',
//       mobileNumber: '',
//       password: '',
//       isFormValid: false,
//       errors: {
//         email: '',
//         password: '',
//         mobileNumber: '',
//       },
//     };
//   }

//   handleInputChange = (event) => {
//     const { name, value } = event.target;

//     this.setState(
//       {
//         [name]: value,
//       },
//       () => this.validateField(name, value)
//     );
//   };

//   validateField = (fieldName, value) => {
//     const { errors } = this.state;

//     switch (fieldName) {
//       case 'email':
//         errors.email = this.validateEmail(value) ? '' : 'Invalid email address';
//         break;
//       case 'password':
//         errors.password = this.validatePassword(value)
//           ? ''
//           : 'Enter a strong password';
//         break;
//       case 'mobileNumber':
//         errors.mobileNumber = this.validateMobileNumber(value)
//           ? ''
//           : 'Invalid mobile number';
//         break;
//       default:
//         break;
//     }

//     this.setState({ errors }, this.validateForm);
//   };

//   validateForm = () => {
//     const { firstName, lastName, email, mobileNumber, password, errors } =
//       this.state;
//     const isFormValid =
//       firstName.trim() !== '' &&
//       lastName.trim() !== '' &&
//       email.trim() !== '' &&
//       mobileNumber.trim() !== '' &&
//       password.trim() !== '' &&
//       Object.values(errors).every((error) => error === '');

//     this.setState({ isFormValid });
//   };

//   validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   // validatePassword = (password) => {
//   //   return password.length >= 6;
    
//   // };
//   validatePassword = (password) => {
//     // Password must be at least 8 characters long and contain at least one uppercase letter,
//     // one lowercase letter, one number, and one special character
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return passwordRegex.test(password);
//   };

//   validateMobileNumber = (mobileNumber) => {
//     const mobileNumberRegex = /^[0-9]{10}$/;
//     return mobileNumberRegex.test(mobileNumber);
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
  
//     if (this.state.isFormValid) {
//       const { firstName, lastName, email, mobileNumber, password } = this.state;
  
//       // Make a POST request to the backend signup API endpoint
//       fetch('http://localhost:5000/api/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           firstName,
//           lastName,
//           email,
//           mobileNumber,
//           password,
//         }),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log('Form submitted!', data);
//           // Handle successful signup, e.g., show a success message or redirect to a new page.
//         })
//         .catch((error) => {
//           console.error('Error submitting form:', error);
//           // Handle errors, e.g., display an error message to the user.
//         });
//     } else {
//       console.log('Please fill in all the required fields correctly.');
//     }
//   };
  

//   render() {
//     const {
//       firstName,
//       lastName,
//       email,
//       mobileNumber,
//       password,
//       isFormValid,
//       errors,
//     } = this.state;

//     return (
//       <div className="auth-wrapper">
//         <div className="auth-inner">
//           <form onSubmit={this.handleSubmit}>
//             <h3>Sign Up</h3>
//             <div className="mb-3">
//               <label>First name</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 className="form-control"
//                 placeholder="First name"
//                 value={firstName}
//                 onChange={this.handleInputChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label>Last name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 className="form-control"
//                 placeholder="Last name"
//                 value={lastName}
//                 onChange={this.handleInputChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label>Email address</label>
//               <input
//                 type="email"
//                 name="email"
//                 className="form-control"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={this.handleInputChange}
//               />
//               {errors.email && <div className="text-danger">{errors.email}</div>}
//             </div>
//             <div className="mb-3">
//               <label>Mobile number</label>
//               <input
//                 type="tel"
//                 name="mobileNumber"
//                 className="form-control"
//                 placeholder="Enter mobile number"
//                 value={mobileNumber}
//                 onChange={this.handleInputChange}
//               />
//               {errors.mobileNumber && <div className="text-danger">{errors.mobileNumber}</div>}
//             </div>
//             <div className="mb-3">
//               <label>Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 className="form-control"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={this.handleInputChange}
//               />
//               {errors.password && <div className="text-danger">{errors.password}</div>}
//             </div>
//             <div className="d-grid">
//               <button type="submit" disabled={!isFormValid}>
//                 Sign Up
//               </button>
//             </div>
//             <p className="forgot-password text-right">
//               Already registered <Link to="/sign-in">sign in?</Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }













// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { adduser } from '../loginpage/api';
// // import axios from 'axios';
// function SignUp () {
//   const navigate = useNavigate();
//   // const [signupFirstName, setSignupFirstName] = useState('');
//   // const [signupLastName, setSignupLastName] = useState('');
//   // const [signupEmail, setSignupEmail] = useState('');
//   // const [signupPassword, setSignupPassword] = useState('');


//   // const handleSignup = (e) => {
//   //   e.preventDefault();
//   //   // Perform signup authentication logic here

//   //   // Example: Check if signup data is valid
//   //   if (signupFirstName.trim() === '') {
//   //     alert('Please enter a First name.');
//   //     return;
//   //   }
//   //   if (signupLastName.trim() === '') {
//   //     alert('Please enter a Last name.');
//   //     return;
//   //   }

//   //   if (signupEmail.trim() === '' || signupPassword.trim() === '') {
//   //     alert('Please enter valid signup credentials.');
//   //     return;
//   //   }

//   //   // Navigate to the authenticated page on successful signup
//   //   navigate('/Dashboard');
//   // };

//   const [formdata, setFormdata] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     password: ''
//   }
//   )

//   const handleChange = (e) => {
//     e.preventDefault();
//     setFormdata({ ...formdata, [e.target.id]: e.target.value })
//     console.log(formdata);
//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//     const res = await adduser(formdata);
//     // const res = await axios.post(`http://localhost:9999/set`,formdata);
//       console.log(`${res.status}    ${res.data}`);
      
//       navigate('/home');
//     }
//     catch (error) {
//       console.log(error);
//     }

//     console.log(formdata);
//   }

//   return (
//     <div className='si'>
//       <div className='ss'>
//         <form className="signup-form" onSubmit={handleSubmit}>
//           <h7>Sign Up</h7>
//           <input
//             className="in"
//             type="text"
//             placeholder="First Name"
//             // value={signupFirstName}
//             id='firstname'
//             // onChange={(e) => setSignupFirstName(e.target.value)}
//             onChange={handleChange}
//             required
//           />
//           <br></br>
//           <input
//             className="in"
//             type="text"
//             placeholder="Last Name"
//             // value={signupLastName}
//             id='lastname'
//             // onChange={(e) => setSignupLastName(e.target.value)}
//             onChange={handleChange}
//             required
//             />
//             <br></br>
//           <input
//             className="in"
//             type="email"
//             placeholder="Email"
//             // value={signupEmail}
//             id='email'
//             // onChange={(e) => setSignupEmail(e.target.value)}
//             onChange={handleChange}
//             required
//             />
//             <br></br>
//           <input
//             className="in"
//             type="password"
//             placeholder="Password"
//             // value={signupPassword}
//             id='password'
//             // onChange={(e) => setSignupPassword(e.target.value)}
//             onChange={handleChange}
//             required
//             />
//             <br></br>
//           <button className="b" type='submit'>Sign Up</button>
//           <p className="forgot-password text-right">
//           Already registered <a href="/sign-in">sign in?</a>
//         </p>
//         </form>
//       </div>
//     </div>
//   );

// }
// export default SignUp;


// import React, { useState } from 'react';
// // import '../css/register.css';
// import { useNavigate } from 'react-router-dom';
// // import { adduser } from '../
// // import { adduser } from '../service/Api.js';
// import { adduser } from '../loginpage/api';
// import { Link } from 'react-router-dom';
// // import '../css/register.css';
// // import axios from 'axios';
// function SignUp () {
//   const navigate = useNavigate();
//   // const [signupFirstName, setSignupFirstName] = useState('');
//   // const [signupLastName, setSignupLastName] = useState('');
//   // const [signupEmail, setSignupEmail] = useState('');
//   // const [signupPassword, setSignupPassword] = useState('');


//   // const handleSignup = (e) => {
//   //   e.preventDefault();
//   //   // Perform signup authentication logic here

//   //   // Example: Check if signup data is valid
//   //   if (signupFirstName.trim() === '') {
//   //     alert('Please enter a First name.');
//   //     return;
//   //   }
//   //   if (signupLastName.trim() === '') {
//   //     alert('Please enter a Last name.');
//   //     return;
//   //   }

//   //   if (signupEmail.trim() === '' || signupPassword.trim() === '') {
//   //     alert('Please enter valid signup credentials.');
//   //     return;
//   //   }

//   //   // Navigate to the authenticated page on successful signup
//   //   navigate('/Dashboard');
//   // };

//   const [formdata, setFormdata] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     password: ''
//   }
//   )

//   const handleChange = (e) => {
//     e.preventDefault();
//     setFormdata({ ...formdata, [e.target.id]: e.target.value })
//     console.log(formdata);
//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//     const res = await adduser(formdata);
//     // const res = await axios.post(`http://localhost:9999/set`,formdata);
//       console.log(`${res.status}    ${res.data}`);
      
//       navigate('/home');
//     }
//     catch (error) {
//       console.log(error);
//     }

//     console.log(formdata);
//   }

//   return (
//     <div className='si'>
//       <div className='ss'>
//         <form className="signup-form" onSubmit={handleSubmit}>
//           <h2>Sign Up</h2>
//           <input
//             className="in"
//             type="text"
//             placeholder="First Name"
//             // value={signupFirstName}
//             id='firstname'
//             // onChange={(e) => setSignupFirstName(e.target.value)}
//             onChange={handleChange}
//             required
//           />
//           <br></br>
//           <input
//             className="in"
//             type="text"
//             placeholder="Last Name"
//             // value={signupLastName}
//             id='lastname'
//             // onChange={(e) => setSignupLastName(e.target.value)}
//             onChange={handleChange}
//             required
//             />
//             <br></br>
//           <input
//             className="in"
//             type="email"
//             placeholder="Email"
//             // value={signupEmail}
//             id='email'
//             // onChange={(e) => setSignupEmail(e.target.value)}
//             onChange={handleChange}
//             required
//             />
//             <br></br>
//           <input
//             className="in"
//             type="password"
//             placeholder="Password"
//             // value={signupPassword}
//             id='password'
//             // onChange={(e) => setSignupPassword(e.target.value)}
//             onChange={handleChange}
//             required
//             />
//             <br></br>
//           <button className="b" type='submit'>Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );

// }
// export default SignUp;






//import React, { Component } from 'react'
// export default class SignUp extends Component {
//   render() {
//     return (
//       <div className="auth-wrapper">
//           <div className="auth-inner">
//       <form>
//         <h3>Sign Up</h3>
//         <div className="mb-3">
//           <label>First name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="First name"
//           />
//         </div>
//         <div className="mb-3">
//           <label>Last name</label>
//           <input type="text" className="form-control" placeholder="Last name" />
//         </div>
//         <div className="mb-3">
//           <label>Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//           />
//         </div>
//         <div className="mb-3">
//           <label>Mobile number</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter mobile number"
//           />
//         </div>
//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//           />
//         </div>
//         <div className="d-grid">
//           {/* <button type="submit" className="btn btn-primary">
//             Sign Up
//           </button> */}
//           Sign Up
//         </div>
//         <p className="forgot-password text-right">
//           Already registered <a href="/sign-in">sign in?</a>
//         </p>
//       </form>
//       </div>
//       </div>
//     )
//   }
// }





// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// export default class SignUp extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       firstName: '',
//       lastName: '',
//       email: '',
//       mobileNumber: '',
//       password: '',
//       isFormValid: false,
//       errors: {
//         email: '',
//         password: '',
//         mobileNumber: '',
//       },
//     };
//   }

//   handleInputChange = (event) => {
//     const { name, value } = event.target;

//     this.setState(
//       {
//         [name]: value,
//       },
//       () => this.validateField(name, value)
//     );
//   };

//   validateField = (fieldName, value) => {
//     const { errors } = this.state;

//     switch (fieldName) {
//       case 'email':
//         errors.email = this.validateEmail(value) ? '' : 'Invalid email address';
//         break;
//       case 'password':
//         errors.password = this.validatePassword(value)
//           ? ''
//           : 'Enter a strong password';
//         break;
//       case 'mobileNumber':
//         errors.mobileNumber = this.validateMobileNumber(value)
//           ? ''
//           : 'Invalid mobile number';
//         break;
//       default:
//         break;
//     }

//     this.setState({ errors }, this.validateForm);
//   };

//   validateForm = () => {
//     const { firstName, lastName, email, mobileNumber, password, errors } =
//       this.state;
//     const isFormValid =
//       firstName.trim() !== '' &&
//       lastName.trim() !== '' &&
//       email.trim() !== '' &&
//       mobileNumber.trim() !== '' &&
//       password.trim() !== '' &&
//       Object.values(errors).every((error) => error === '');

//     this.setState({ isFormValid });
//   };

//   validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   // validatePassword = (password) => {
//   //   return password.length >= 6;
    
//   // };
//   validatePassword = (password) => {
//     // Password must be at least 8 characters long and contain at least one uppercase letter,
//     // one lowercase letter, one number, and one special character
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return passwordRegex.test(password);
//   };

//   validateMobileNumber = (mobileNumber) => {
//     const mobileNumberRegex = /^[0-9]{10}$/;
//     return mobileNumberRegex.test(mobileNumber);
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     if (this.state.isFormValid) {
//       // You can perform the sign-up action here, for example:
//       // const { firstName, lastName, email, mobileNumber, password } = this.state;
//       // performSignUp(firstName, lastName, email, mobileNumber, password);
//       console.log('Form submitted!');
//     } else {
//       console.log('Please fill in all the required fields correctly.');
//     }
//   };

//   render() {
//     const {
//       firstName,
//       lastName,
//       email,
//       mobileNumber,
//       password,
//       isFormValid,
//       errors,
//     } = this.state;

//     return (
//       <div className="auth-wrapper">
//         <div className="auth-inner">
//           <form onSubmit={this.handleSubmit}>
//             <h3>Sign Up</h3>
//             <div className="mb-3">
//               <label>First name</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 className="form-control"
//                 placeholder="First name"
//                 value={firstName}
//                 onChange={this.handleInputChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label>Last name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 className="form-control"
//                 placeholder="Last name"
//                 value={lastName}
//                 onChange={this.handleInputChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label>Email address</label>
//               <input
//                 type="email"
//                 name="email"
//                 className="form-control"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={this.handleInputChange}
//               />
//               {errors.email && <div className="text-danger">{errors.email}</div>}
//             </div>
//             <div className="mb-3">
//               <label>Mobile number</label>
//               <input
//                 type="tel"
//                 name="mobileNumber"
//                 className="form-control"
//                 placeholder="Enter mobile number"
//                 value={mobileNumber}
//                 onChange={this.handleInputChange}
//               />
//               {errors.mobileNumber && <div className="text-danger">{errors.mobileNumber}</div>}
//             </div>
//             <div className="mb-3">
//               <label>Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 className="form-control"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={this.handleInputChange}
//               />
//               {errors.password && <div className="text-danger">{errors.password}</div>}
//             </div>
//             <div className="d-grid">
//               <button type="submit" disabled={!isFormValid}>
//                 Sign Up
//               </button>
//             </div>
//             <p className="forgot-password text-right">
//               Already registered <Link to="/sign-in">sign in?</Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }




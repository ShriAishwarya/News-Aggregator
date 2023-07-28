import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic form validation
    if (!email.trim() || !password.trim()) {
      setError('Please enter correct email and password.');
    } else {
      setError('');

      // Implement your authentication logic here
      // For simplicity, let's assume the authentication is successful

      // After successful validation, navigate to the "/home" page
      navigate('/home');
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="text-danger">{error}</div>
          <button className="b" type="submit">Submit</button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
          <p className="forgot-password text-right">
            Don't have an account? <a href="/sign-up">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;









// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Implement your form validation and authentication logic here
//     // For example, you can get the email and password values from the form
//     // using event.target.elements and perform validation checks.

//     // After successful validation, navigate to the "/home" page
//     navigate('/home');
//   };

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-inner">
//         <form onSubmit={handleSubmit}>
//           <h3>Sign In</h3>
//           <div className="mb-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//             />
//           </div>
//           <div className="mb-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter password"
//             />
//           </div>
//           <div className="mb-3">
//             <div className="custom-control custom-checkbox">
//               <input
//                 type="checkbox"
//                 className="custom-control-input"
//                 id="customCheck1"
//               />
//               <label className="custom-control-label" htmlFor="customCheck1">
//                 Remember me
//               </label>
//             </div>
//           </div>
//           {/* <div className="d-grid"> */}
//             <button className="b" type="submit">Submit</button>
//           {/* </div> */}
//           <p className="forgot-password text-right">
//             Forgot <a href="#">password?</a>
//           </p>
//           <p className="forgot-password text-right">
//             Don't have an account? <a href="/sign-up">Sign up</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;











// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       error: null,
//     };
//   }

//   handleInputChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleLogin = (event) => {
//     event.preventDefault();
//     const { email, password } = this.state;

//     // Call the backend login API here and handle the response
//     // For example, using the fetch API:
//     fetch('/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     })
//       .then((response) => {
//         if (response.ok) {
//           // Successful login, redirect to home page
//           this.props.history.push('/home');
//         } else {
//           // Failed login, display error message
//           this.setState({ error: 'Invalid email or password' });
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         this.setState({ error: 'Something went wrong. Please try again later.' });
//       });
//   };

//   render() {
//     const { email, password, error } = this.state;

//     return (
//       <div className="auth-wrapper">
//         <div className="auth-inner">
//           <form onSubmit={this.handleLogin}>
//             <h3>Sign In</h3>
//             <div className="mb-3">
//               <label>Email address</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={this.handleInputChange}
//                 className="form-control"
//                 placeholder="Enter email"
//               />
//             </div>
//             <div className="mb-3">
//               <label>Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={password}
//                 onChange={this.handleInputChange}
//                 className="form-control"
//                 placeholder="Enter password"
//               />
//             </div>
//             <div className="mb-3">
//               <div className="custom-control custom-checkbox">
//                 <input type="checkbox" className="custom-control-input" id="customCheck1" />
//                 <label className="custom-control-label" htmlFor="customCheck1">
//                   Remember me
//                 </label>
//               </div>
//             </div>
//             <div className="d-grid">
//               <button type="submit" className="btn btn-primary">
//                 Submit
//               </button>
//             </div>
//             {error && <p className="error-message">{error}</p>}
//             <p className="forgot-password text-right">
//               Forgot <a href="#">password?</a>
//             </p>
//             <p className="forgot-password text-right">
//               Don't have an account <Link to="/sign-up">sign up?</Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
















// import React, { Component } from 'react'
// import { Link } from "react-router-dom";
// export default class Login extends Component {
//   render() {
//     return (
//       <div className="auth-wrapper">
//           <div className="auth-inner">
//       <form>
//         <h3>Sign In</h3>
//         <div className="mb-3">
//           <label>Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
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
//         <div className="mb-3">
//           <div className="custom-control custom-checkbox">
//             <input
//               type="checkbox"
//               className="custom-control-input"
//               id="customCheck1"
//             />
//             <label className="custom-control-label" htmlFor="customCheck1">
//               Remember me
//             </label>
//           </div>
//         </div>
//         <div className="d-grid">
//            {/* <Link to="/home"><button type="submit" className="btn btn-primary">
//             Submit
//           </button></Link> */}
//           <Link to="/home">
//             Submit
//           </Link>
//         </div>
//         <p className="forgot-password text-right">
//           Forgot <a href="#">password?</a>
//         </p>
//         <p className="forgot-password text-right">
//           Don't have a account  <a href="/sign-up">sign up?</a>
//         </p>
//       </form>
//       </div>
//       </div>
//     )
//   }
// }


//  import React, { Component } from 'react';
//  import { Link } from 'react-router-dom';

// export default class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: '',
//       password: '',
//       isFormValid: false,
//     };
//   }

//   handleInputChange = (event) => {
//     const { name, value } = event.target;

//     this.setState({
//       [name]: value,
//     }, this.validateForm);
//   };

//   validateForm = () => {
//     const { email, password } = this.state;
//     const isFormValid = email.trim() !== '' && password.trim() !== '';
//     this.setState({ isFormValid });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     if (this.state.isFormValid) {
//       // You can perform the login action here, for example:
//       // const { email, password } = this.state;
//       // performLogin(email, password);
//       console.log('Form submitted!');
//     } else {
//       console.log('Please fill in all the required fields.');
//     }
//   };

//   render() {
//     const { email, password, isFormValid } = this.state;

//     return (
//       <div className="auth-wrapper">
//         <div className="auth-inner">
//           <form onSubmit={this.handleSubmit}>
//             <h3>Sign In</h3>
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
//             </div>
//             <div className="mb-3">
//               <div className="custom-control custom-checkbox">
//                 <input
//                   type="checkbox"
//                   className="custom-control-input"
//                   id="customCheck1"
//                 />
//                 <label className="custom-control-label" htmlFor="customCheck1">
//                   Remember me
//                 </label>
//               </div>
//             </div>
//             <div className="d-grid">
//               {/* Disable the "Submit" button if the form is not valid */}
//               <button type="submit" disabled={!isFormValid}>
//               <Link to="/home">
//              Submit
//           </Link>
                
//               </button>
//             </div>
//             <p className="forgot-password text-right">
//               Forgot <a href="#">password?</a>
//             </p>
//             <p className="forgot-password text-right">
//               Don't have an account? <a href="/sign-up">Sign up?</a>
//             </p>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }


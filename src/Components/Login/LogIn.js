import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios'
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://carbooking-backend-fo78.onrender.com/api/users');
      const data = await response.json();

      const user = data.find(user => user.email === email && user.password === password);

      if (user) {
        // User found, do something (e.g., log in the user)
        // localStorage.setItem('user', JSON.stringify(user));
        // console.log('Login successful:', user);
        window.location.href = '/home';
        // Redirect to home page or perform other actions as needed
      } else {
        // User not found or credentials don't match
        console.log('Invalid credentials');
        alert('Invalid credentials')
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if (formData.email.length * formData.password.length === 0) {
  //     return;

  //   }
  //   try {
  //     // http://localhost:7000/api/user-login/logout
  //     axios.post('http://localhost:7000/api/user-login', formData, { withCredentials: true })
  //       .then((res) => {
  //         console.log(res.data)
  //         localStorage.setItem('user', JSON.stringify(res.data));
  //         window.location.href = '/home';
  //       })
  //   }
  //   catch (e) {
  //     console.log("error", e)
  //   }
  // }

  // useEffect(() => {
  //   try {
  //     axios.get('http://localhost:7000/api/user-login', { withCredentials: true })
  //       .then((res) => {
  //         if (res.data.loggedIn) {
  //           localStorage.setItem('user', JSON.stringify(res.data));
  //           window.location.href = '/home';

            

  //         } else {
  //           console.log(res.data.loggedIn)
  //         }
  //       })
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }, [])



  return (
    <>
      <div className="flex justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mx-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3 h-3/4 mt-28 rounded-5">
          <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-teal-600" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-center">Login In</h3>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <div className="mt-4">
                <label className="block" htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-teal-600"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-teal-600"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex">
                <button
                  type='submit'
                  className="loggin-btn w-full px-6 py-2 mt-4 text-white bg-dark rounded-lg hover:bg-teal-700 transition duration-200"
                >
                  Login In
                </button>
              </div>
            </div>
          </form>
          {/* <div className="mt-6 text-grey-dark">
            <span className="mr-2">Don't have an account?</span>
            <Link to='/signup' className="text-teal-600 hover:underline font-bold">
              Register
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Login;

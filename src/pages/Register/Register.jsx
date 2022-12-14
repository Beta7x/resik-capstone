import React from 'react';
import registerImg from '../../assets/register2.png';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRegister } from '../../redux/registerSlice';
import Logo from '../../assets/logo-resik2.png';
import { Link ,useNavigate} from 'react-router-dom';

export const Register = () => {
  // use redux
  const dispatch = useDispatch();
  const registerData = useSelector((state) => state.register.registerData);
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/login');
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setRegister(
      {
        name: e.target.name.value,
        email: e.target.email.value,
        username: e.target.username.value,
        password: e.target.password.value,
        phone: e.target.phone.value,
      }
    ));
    e.target.reset();
    navigateToLogin();
    
  };
  const [
    hasError = {
      name: false,
      username: false,
      email: false,
      phone: false,
      password: false,
      confirmPassword: false,
    },
    setHasError,
  ] = useState({
    name: false,
    username: false,
    email: false,
    phone: false,
    password: false,
    confirmPassword: false,
  });


  const [errorMessage, setErrorMessage] = useState('');
  const handleChange = (e) => {
    let { name, value } = e.target;
   
    //
    if (name === 'name') {
      if (value.length < 3) {
        setHasError({ ...hasError, name: true });
        setErrorMessage('Name must be at least 3 characters');
      } else {
        setHasError({ ...hasError, name: false });
        setErrorMessage('');
      }
    }
    if (name === 'username') {
      if (value.length < 3) {
        setHasError({ ...hasError, username: true });
        setErrorMessage('Username must be at least 3 characters');
      } else {
        setHasError({ ...hasError, username: false });
        setErrorMessage('');
      }
    }
    if (name === 'email') {
      if (value.length < 3) {
        setHasError({ ...hasError, email: true });
        setErrorMessage('Email must be at least 3 characters');
      } else {
        setHasError({ ...hasError, email: false });
        setErrorMessage('');
      }
    }
    if (name === 'phone') {
      if (value.length < 3) {
        setHasError({ ...hasError, phone: true });
        setErrorMessage('Phone must be at least 3 characters');
      } else {
        setHasError({ ...hasError, phone: false });
        setErrorMessage('');
      }
    }
    if (name === 'password') {
      if (value.length < 3) {
        setHasError({ ...hasError, password: true });
        setErrorMessage('Password must be at least 3 characters');
      } else {
        setHasError({ ...hasError, password: false });
        setErrorMessage('');
      }
    }
  };
  return (
    <>
      <div className="bg-gray-100 grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img className="h-4/5 w-4/5 mt-12 ml-24" src={registerImg} alt="" />
        </div>

        <div className="bg-gray-100 flex flex-col justify-center">
          <form
            onSubmit={handleSubmit}
            className="max-w-[400px] my-5 shadow-2xl rounded-lg px-10 w-full mx-auto bg-white p-4"
          >
            <img src={Logo} alt="logo" className="h-16 mx-auto" />
            <div className="flex flex-col py-2">
              <label>
                Name<span className="text-red-600"> *</span>
              </label>
              <input
              min={3}
                placeholder="Enter Name"
                onChange={handleChange}
                className="border p-2"
                type="text"
                name="name"
              />
              {hasError.name && (
                <p className="text-red-600 text-xs italic">{errorMessage}</p>
              )}
            </div>
            <div className="flex flex-col py-2">
              <label>
                Username<span className="text-red-600"> *</span>
              </label>
              <input
              min={3}
                placeholder="Enter Username"
                onChange={handleChange}
                className="border p-2"
                type="text"
                name="username"
              />
              {hasError.username && (
                <p className="text-red-600 text-xs italic">{errorMessage}</p>
              )}
            </div>
            <div className="flex flex-col py-2">
              <label>
                Email<span className="text-red-600"> *</span>
              </label>
              <input
              min={3}
                placeholder="Enter Email"
                onChange={handleChange}
                className="border p-2"
                type="text"
                name="email"
              />
              {
                hasError.email && (
                  <p className="text-red-600 text-xs italic">{errorMessage}</p>
                )

              }
            </div>
            <div className="flex flex-col py-2">
              <label>
                Phone Number<span className="text-red-600"> *</span>
              </label>
              <input
              min={3}
                placeholder="Enter Phone Number"
                onChange={handleChange}
                className="border p-2"
                type="text"
                name="phone"
              />
              {
                hasError.phone && (
                  <p className="text-red-600 text-xs italic">{errorMessage}</p>
                )

              }
            </div>
            <div className="flex flex-col py-2">
              <label>
                Password<span className="text-red-600"> *</span>
              </label>
              <input
                placeholder="Enter password"
                onChange={handleChange}
                className="border p-2"
                type="password"
                name="password"
              />
              {
                hasError.password && (
                  <p className="text-red-600 text-xs italic">{errorMessage}</p>
                )

              }
            </div>
            <button
              type="submit"
              className="border w-full my-4 py-2 bg-resik-primary hover:bg-resik-secondary rounded-md text-white"
            >
              Register
            </button>
            <div className="flex justify-between">
              <p className="text-center mt-8 text-gray-400">
                Already a member?{' '}
                <Link to="/login">
                  <span className="text-resik-primary">Sign In</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

import React, { useState } from 'react';
import { registerUser } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';
import registerForm from '../../forms/registerForm';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await registerUser({ 
        email, 
        password, 
        firstname, 
        lastname, 
        birthday, 
        gender, 
        phoneNumber, 
        address });
      navigate('/login');
    } catch (err) {
      setError('Registration failed. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.vh100}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className={`${styles.card} card text-black`} >
              <div className='card-body p-md-5'>
                <div className='row justify-content-center'>
                  <div className='col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    {error && <div className="alert alert-danger">{error}</div>}
                    {registerForm(
                      handleSubmit, 
                      email, setEmail, 
                      password, setPassword, 
                      firstname, setFirstname,
                      lastname, setLastname,
                      birthday, setBirthday,
                      gender, setGender,
                      phoneNumber, setPhoneNumber,
                      address, setAddress,
                      isLoading
                    )}
                  </div>
                  <div className='col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2'>
                    <img src="./register.webp" className="img-fluid" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

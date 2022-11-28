import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useToken from '../../../hooks/useToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, googleLogin } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
        navigate('/');
    }

    const handleSignUp = (data) => {
        // console.log(data.role);
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const handleGoogleSignIn = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                const name = user.displayName
                const email = user.email;
                const role = 'buyer'
                console.log(name, email, role);
                saveUser(name, email, role)
                setCreatedUserEmail(email);
                toast.success('successfully login')
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const saveUser = (name, email, role) =>{
        const user ={name, email, role};
        fetch('https://assignment-12-server-liart.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // headers: {
                //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                // }
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            setCreatedUserEmail(email);
            
        })
    }



    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 border-2 border-[#029841] bg-gray-100'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    {/* seller or buyer role */}

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Specialty</span></label>
                        <select
                            {...register('role')}
                            className="select input-bordered w-full max-w-xs">
                            <option selected>buyer</option>
                            <option>seller</option>
                        </select>
                    </div>
                    <input className='mb-2 bg-[#029841] hover:bg-white hover:text-[#029841]  btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}

                </form>
                <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn hover:bg-[#029841] btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default SignUp;
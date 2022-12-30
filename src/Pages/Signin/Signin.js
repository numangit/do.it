import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { AuthContext } from '../../Contexts/AuthProvider';

const Signin = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    //show and hide password
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    //form submit function to handle email login
    const handleLogin = data => {
        // console.log(data)
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                // const user = result.user;
                // console.log(user);
                // toast.success('welcome back');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }

    return (
        <div className='mt-20 lg:h-screen flex justify-center items-center'>

            <div className="shadow-md p-10 lg:mx-auto w-full lg:w-96 rounded-xl my-5 lg:my-24 border">
                <h2 className="text-3xl text-center font-semibold mb-3">Sing In</h2>
                <p className='text-center text-slate-400'>welcome back!</p>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div>
                        {loginError && <p className='text-red-600 text-center text-sm'>{loginError.slice(22, -2)} <span className='text-slate-500'>Please Try again!</span></p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="">Email :</span></label>
                        <input {...register("email", { required: "Email Address is required" })} type="email" className="input input-bordered w-full dark:text-slate-900" placeholder='Demo: test@doit.com' />
                        {errors.email && <p className="text-red-500 text-sm" role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password :</span>
                            {/* <label htmlFor="my-modal-4" className="label my-0 py-0">
                                <span className="label-text ">Forgot Password?</span>
                            </label> */}
                        </label>
                        <div className='relative'>
                            <input {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                })}
                                type={passwordShown ? "text" : "password"}
                                className="input input-bordered w-full  dark:text-slate-900"
                                placeholder='Demo: 123123' />

                            <div onClick={togglePassword}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center dark:text-slate-900 ">
                                <AiFillEye
                                    className={passwordShown ? 'hidden' : 'block'} />
                                <AiFillEyeInvisible
                                    className={passwordShown ? 'block' : 'hidden'} />
                            </div>
                        </div>

                        {errors.password && <p className="text-red-500 text-sm" role="alert">{errors.password?.message}</p>}
                    </div>
                    <input className='btn bg-black text-white rounded-md p-2 w-full mt-3' value="Sign In" type="submit" />
                </form >

                <p className="text-xs mt-3 text-center">Don't have an account? <Link className="underline" to="/register">Create new account</Link></p>

                {/* modal */}
                {/* <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <label className="modal-box relative" htmlFor="">
                        <h3 className="font-bold text-lg my-1">Reset your password</h3>
                        <p>Enter the email address associated with your account and we'll send you a link to reset your password.</p>
                        <form className="my-2" onSubmit={handlePasswordReset} >
                            <div className="form-control w-full">
                                <input name="email" type="email" className="input input-bordered w-full my-2" placeholder='Your email' />
                            </div>
                            <button className="btn mx-auto w-full my-1" type="submit">Send</button>
                        </form>
                    </label>
                </label> */}
            </div >
        </div>
    );
};

export default Signin;
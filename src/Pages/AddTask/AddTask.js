import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FcInfo } from 'react-icons/fc';
import { IoMdImages } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const AddTask = () => {
    const { user } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [formError, setFormError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    return (
        <div className='lg:h-screen flex justify-center items-center'>
            <div className='w-full lg:w-4/5'>

                <div className=''>
                    <h1 className='text-2xl text-center'>Hey <span className='text-amber-600 font-semibold'>{user?.displayName}</span>, add Your task here!</h1>
                    <div className="shadow-lg p-4 lg:p-8 mx-1 lg:mx-auto w-full lg:w-5/6 rounded-xl my-2 lg:my-5 border text-dark bg-white">
                        <h2 className="text-xl text-start font-semibold ">
                            <span className='flex items-center'><FcInfo className='mx-2 text-lg' /> Please fill up the form</span>
                        </h2>
                        <div className="divider my-1"></div>
                        <form onSubmit="{handleSubmit(handleAddAProduct)}">

                            {/* name and image  */}
                            <div className="grid grid-cols-2 gap-5 my-3">
                                <div className="form-control w-full flex flex-wrap">
                                    <div className='w-full'>
                                        <label for="small-input" className="block mb-2 text-sm font-medium w-1/2 text-gray-900 dark:text-white">Small input</label>
                                        <input type="text" id="small-input" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    {errors.productName && <p className="text-red-500 text-xs" role="alert">{errors.productName?.message}</p>}
                                </div>
                                <div>
                                    {/* <label className="w-full shadow-sm mx-auto flex items-center p-1 bg-white text-black rounded tracking-wide border cursor-pointer">
                                        <div className='mx-auto flex items-center'>
                                            <IoMdImages className='mx-2' />
                                            <span className="text-xs font-bold">Product image</span>
                                        </div>
                                        <input type="file"
                                            {...register("productImage", { required: "Photo is Required" })}
                                            className="hidden" />
                                    </label>
                                    {errors.productImage && <p className='text-red-500 text-xs'>{errors.productImage.message}</p>} */}


                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload file</label>
                                    <input className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                                    {/* <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div> */}

                                </div>
                            </div>
                            {/* description */}
                            {/* <div className="w-full my-3">
                                <textarea className="textarea textarea-bordered w-full focus:border-none" placeholder="Product description*"
                                    {...register("productDescription", { required: "Description must be filled" })}></textarea>
                                {errors.productDescription && <p className="text-red-500 text-xs" role="alert">{errors.productDescription?.message}</p>}
                            </div> */}

                            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

                            {/* {
                                loading ?
                                    <button className='btn btn-accent w-full' type="submit">
                                        <TailSpin
                                            height="30"
                                            width="30"
                                            color="#2196f3"
                                            ariaLabel="tail-spin-loading"
                                            radius="1"
                                            wrapperStyle={{}}
                                            wrapperclassName=""
                                            visible={true}
                                        />
                                        <span className='mx-1'>Add Product</span>
                                    </button>
                                    : */}
                            <input className='mt-3 w-full bg-black text-white p-2 rounded-md' value="Add Task" type="submit" />
                            {/* <input type="submit" className="w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-4 "
                                value="Add Task" /> */}

                            {/* } */}
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTask;
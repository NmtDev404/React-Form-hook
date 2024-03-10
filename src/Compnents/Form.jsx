import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const formSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <div className="max-w-md mx-auto m-4 bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit(formSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="firstName"
                            type="text"
                            placeholder="First Name"
                            required
                            {...register('firstName', { minLength: { value: 3, message:'Minimum length is 3 characters' }, maxLength: { value: 10, message:'Maximum length is 10 characters' } })}
                        />
                      
                            <p className="text-red-500">{errors.firstName?.message}</p>
                        
                        
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lasttName">
                            Last Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="lastName"
                            type="text"
                            placeholder="Last Name"
                            required
                            {...register('lastName', { minLength: { value: 3, message:'Minimum length is 3 characters' }, maxLength: { value: 10, message:'Maximum length is 10 characters' } })}
                        />
                      
                            <p className="text-red-500">{errors.lastName?.message}</p>
                        
                        
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="...peer shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            placeholder="Your Email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required
                            {...register('email', { minLength: { value: 3, message:'Minimum length is 3 characters' }, maxLength: { value: 10, message:'Maximum length is 10 characters' } })}
                        />
                      
                            <p className=" mt-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block ">{errors.email?.message}</p>
                        
                        
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            
                            required
                            {...register('password', { minLength: { value: 7, message:'Minimum length is 7 characters' }, maxLength: { value: 20, message:'Maximum length is 20 characters' } })}
                        />
                      
                            <p className="text-red-500">{errors.password?.message}</p>
                        
                        
                    </div>

                    
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm_password">
                        Confirm password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirm_password"
                            type="password"
                            placeholder="Confirm password"
                            required
                            {...register('password', { minLength: { value: 7, message:'Minimum length is 7 characters' }, maxLength: { value: 20, message:'Maximum length is 20 characters' } })}
                        />
                      
                            <p className="text-red-500">{errors.password?.message}</p>
                        
                        
                    </div>
                  
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;

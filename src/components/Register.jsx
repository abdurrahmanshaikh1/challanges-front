import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/AuthSlice';

const Register = ({setToggle}) => {
    const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const password = watch('password');

  const onSubmit = (data) => {
    console.log('Registration data:', data);
    dispatch(addUser(data))
    alert('User Register Successfully')
    reset();
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-900/90 backdrop-blur-xl text-white rounded-xl p-6 w-full max-w-sm flex flex-col gap-4 shadow-xl border border-slate-700/50"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent mb-1">
            Create Account
          </h1>
        </div>

        {/* Name */}
        <div>
          <label className="block font-medium text-slate-300 mb-1.5">Full Name</label>
          <input
            {...register('name', {
              required: 'Name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' },
            })}
            type="text"
            className="w-full px-3 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-200 text-sm"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-rose-400">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium text-slate-300 mb-1.5">Email</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            type="email"
            className="w-full px-3 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-200 text-sm"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-rose-400">{errors.email.message}</p>
          )}
        </div>

        {/* Mobile */}
        <div>
          <label className="block font-medium text-slate-300 mb-1.5">Mobile Number</label>
          <input
            {...register('mobile', {
              required: 'Mobile number is required',
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: 'Enter valid Indian mobile number (10 digits)',
              },
            })}
            type="tel"
            className="w-full px-3 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-200 text-sm"
            placeholder="98xxxxxxxx"
          />
          {errors.mobile && (
            <p className="mt-1 text-xs text-rose-400">{errors.mobile.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block font-medium text-slate-300 mb-1.5">Password</label>
          <input
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 8, message: 'Password must be at least 8 characters' },
            })}
            type="password"
            className="w-full px-3 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-200 text-sm"
            placeholder="Create a strong password"
          />
          {errors.password && (
            <p className="mt-1 text-xs text-rose-400">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-amber-500 hover:from-cyan-600 hover:to-amber-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-3 focus:ring-cyan-500/30 transform hover:-translate-y-0.5 text-sm"
        >
          Create Account
        </button>

        <div className="text-center pt-2">
          <p className="text-sm text-slate-400">
            Already have an account?{' '}
            <span
              onClick={() => setToggle(prev => !prev)}
              className="ml-1 text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer transition-colors"
            >
              Sign in here
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;

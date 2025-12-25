import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

const Login = ({ setToggle }) => {
    const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('Login data:', data);
    // Call your login API / AuthSlice here
    let {email , password} = JSON.parse(localStorage.getItem('user'))
    if(email === data.email && password === data.password){
        alert('User login successfully')
        navigate('/home')
    }

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
            Welcome Back
          </h1>
          
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
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="mt-1 text-xs text-rose-400">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-amber-500 hover:from-cyan-600 hover:to-amber-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-3 focus:ring-cyan-500/30 transform hover:-translate-y-0.5 text-sm"
        >
          Login
        </button>

        <div className="text-center pt-2">
  <p className="text-sm text-slate-400">
    Don&apos;t have an account?
    <span
      onClick={() => setToggle(prev => !prev)}
      className="ml-1 text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer transition-colors"
    >
      Register here
    </span>
  </p>
</div>

      </form>
    </div>
  );
};

export default Login;

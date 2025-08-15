// import { Link } from 'react-router-dom';

import { Link } from 'react-router-dom';

type LoginStep = 'credentials' | 'otp-verification' | 'success';

type Props = {
  activeScreen: string;
  setActiveScreen: React.Dispatch<React.SetStateAction<LoginStep>>;
};

const LoginComponent: React.FC<Props> = ({ setActiveScreen }) => {
  return (
    <div className="space-y-6 max-w-sm">
      <div className="text-center mb-8">
        <h2 className="mb-4 text-2xl font-semibold text-[#202224] text-center">
          Login to Account
        </h2>
        <p className="text-[#202224] leading-relaxed">
          Please enter your email and password to continue
        </p>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Email address
        </label>
        <input
          id="email"
          autoFocus
          required
          placeholder="Enter your email"
          className="bg-[#F1F4F9] text-[#202224] placeholder:text-[#A6A6A6] border border-[#D8D8D8] rounded-lg block w-full py-2.5 px-3 focus:outline-none  focus:ring-1 focus:ring-active transition-all duration-300 ease-linear"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          required
          placeholder="Enter password"
          className="bg-[#F1F4F9] text-[#202224] placeholder:text-[#A6A6A6] border border-[#D8D8D8] rounded-lg block w-full py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-active transition-all duration-300 ease-linear"
        />
      </div>
      <div className="flex justify-between text-xs text-pry">
        <p>Remember Password</p>
        <Link
          to={'/forgot-password'}
          className="transition-all duration-300 ease-linear hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      <button
        type="submit"
        className="bg-pry text-[#fff]  py-3 w-full text-center  rounded-lg not-odd:font-medium transition-all duration-300 ease-linear ocus:outline-none focus:ring-1 focus:ring-active text-base cursor-pointer hover:bg-[#24356D]"
        onClick={() => setActiveScreen('otp-verification')}
      >
        Sign In
      </button>
      <p className="text-center text-sm">
        Don't have an account?{' '}
        <span className="text-[#F20509]">Create account</span>
      </p>
    </div>
  );
};

export default LoginComponent;

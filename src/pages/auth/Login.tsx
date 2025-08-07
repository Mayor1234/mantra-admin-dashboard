import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="flex items-center justify-center w-screen h-screen bg-active">
      <div>
        <div className=" max-w-2xl w-[400px] mx-auto bg-[#fff]  rounded-lg p-5 box-border overflow-hidden md:inset-0 max-h-full inset-x-32 inset-y-32 shadow shadow-gray-200">
          <div className="px-6 py-6 lg:px-8 space-y-6">
            <p className="mb-4 text-xl font-medium text-gray-700 tracking-wide">
              Sign in to Mantra Dashboard
            </p>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                id="email"
                autoFocus
                className="bg-gray-50 border border-gray-300 text-sm rounded-sm block w-full p-2.5 focus:outline-none focus:border-nude4 focus:ring-1 focus:ring-pry transition-all duration-300 ease-linear"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5 focus:outline-none focus:border-nude4 focus:ring-1 focus:ring-pry transition-all duration-300 ease-linear"
              />
            </div>
            <div className="flex justify-between text-xs text-pry">
              <p>Forgot password</p>
              <p>Privacy policy</p>
            </div>

            <Link to={'/dashboard'}>
              <button
                type="submit"
                className="bg-pry text-[#fff] py-3 w-full text-center hover:bg-nude5 rounded-md font-medium ocus:outline-none focus:ring-1 focus:ring-nude1 text-sm cursor-pointer"
              >
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

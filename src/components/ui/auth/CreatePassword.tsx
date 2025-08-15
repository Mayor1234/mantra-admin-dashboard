type ResetStep =
  | 'credential'
  | 'otp-verification'
  | 'create-password'
  | 'success';

type Props = {
  activeScreen: string;
  setActiveScreen: React.Dispatch<React.SetStateAction<ResetStep>>;
};

const CreatePassword: React.FC<Props> = ({ setActiveScreen }) => {
  return (
    <div className="space-y-6 max-w-sm">
      <div className="text-center mb-8">
        <h2 className="mb-4 text-2xl font-semibold text-[#202224] text-center">
          Create New Password
        </h2>
        <p className="text-[#202224] leading-relaxed">
          The password must contain 8 characters at least, 1 uppercase letter, 1
          number and a special character
        </p>
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
          placeholder="Enter new password"
          className="bg-[#F1F4F9] text-[#202224] placeholder:text-[#A6A6A6] border border-[#D8D8D8] rounded-lg block w-full py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-active transition-all duration-300 ease-linear"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="password"
          required
          placeholder="Confirm new password"
          className="bg-[#F1F4F9] text-[#202224] placeholder:text-[#A6A6A6] border border-[#D8D8D8] rounded-lg block w-full py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-active transition-all duration-300 ease-linear"
        />
      </div>

      <button
        type="submit"
        className="bg-pry text-[#fff] py-3 w-full text-center  rounded-lg not-odd:font-medium transition-all duration-300 ease-linear ocus:outline-none focus:ring-1 focus:ring-active text-sm cursor-pointer hover:bg-[#24356D]"
        onClick={() => setActiveScreen('success')}
      >
        Sign In
      </button>
    </div>
  );
};

export default CreatePassword;

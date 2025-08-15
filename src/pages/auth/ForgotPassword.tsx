import logo from '../../assets/logo/mantra_logo3.png';
import { useState } from 'react';

import SuccessComponent from '../../components/ui/auth/SuccessComponent';

import ForgotPasswordComponent from '../../components/ui/auth/ForgotPasswordComponent';
import CreatePassword from '../../components/ui/auth/CreatePassword';
import ResetPasswordVerification from '../../components/ui/auth/ResetPasswodVerification';

type ResetStep =
  | 'credential'
  | 'otp-verification'
  | 'create-password'
  | 'success';

const ForgotPassword = () => {
  const [activeScreen, setActiveScreen] = useState<ResetStep>('credential');

  return (
    <section className="flex items-center justify-center w-screen h-screen">
      <div className="flex w-full h-full">
        <div className="bg-pry w-[60%] p-10">
          <img
            src={logo}
            alt="Mantra logo"
            width={100}
            height={100}
            className="w-40 h-10 mb-28"
          />
          <div className="w-[558px] space-y-3">
            <p className="bg-[#fff] text-sm text-pry font-medium font-poppins w-fit rounded-full px-3 py-1.5">
              Mantra Employee Management System
            </p>
            <h3 className="uppercase font-jakarta font-extrabold text-[50px] text-[#fff] tracking-normal leading-tight">
              smart, and secured workforce management{' '}
            </h3>
            <p className="font-jakarta text-lg font-medium text-[#DCDCDC]">
              Welcome To The Future Of Workforce Management. The Mantra Employee
              System Isn't Just Another HR Tool — It's Your Company's New Best
              Friend.
            </p>
          </div>
        </div>
        <div className="bg-[#F6F6F6] w-[40%] p-10 h-full flex items-center">
          <div className="max-w-xl w-[450px] h-[543px] -ml-40 bg-[#fff] rounded-3xl p-10 box-border overflow-hidden md:inset-0 max-h-full inset-x-32 inset-y-32 shadow shadow-gray-200 flex items-center justify-center">
            {activeScreen === 'credential' && (
              <ForgotPasswordComponent
                activeScreen={activeScreen}
                setActiveScreen={setActiveScreen}
              />
            )}
            {activeScreen === 'otp-verification' && (
              <ResetPasswordVerification
                activeScreen={activeScreen}
                setActiveScreen={setActiveScreen}
              />
            )}
            {activeScreen === 'create-password' && (
              <CreatePassword
                activeScreen={activeScreen}
                setActiveScreen={setActiveScreen}
              />
            )}
            {activeScreen === 'success' && <SuccessComponent />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;

import { useFormContext } from 'react-hook-form';
import { FormCheckbox, FormInput } from '../../form';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

const ContactInformation = () => {
  const { control } = useFormContext();

  return (
    <div className="p-4 border border-border rounded-lg bg-[#FFFFFF] h-full space-y-5">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-dark">Contact Information</h2>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">CONTACT PERSON</p>
            <p className="font-mulish text-[#343942]">
              Person to contact for enquiries
            </p>
          </div>
          <div className="w-full">
            <FormInput
              control={control}
              name="contact_name"
              placeholder="Position name"
              iconLeft={<FaUser size={14} />}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">CONTACT PHONE</p>
            <p className="font-mulish text-[#343942]">Phone for enquiries</p>
          </div>
          <div className="w-full">
            <FormInput
              control={control}
              name="contact_phone"
              placeholder="Phone number"
              iconLeft={<FaPhoneAlt size={14} />}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">ADDITIONAL CONTACT</p>
            <p className="font-mulish text-[#343942]">
              Extra contact info if needed
            </p>
          </div>
          <div className="w-full">
            <FormInput
              control={control}
              name="additional_contact"
              placeholder="Whatsapp, etc"
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between w-full gap-4">
          <div className="max-w-48 w-full text-xs">
            <p className="font-libre text-dark mb-1">SHOW CONACTS</p>
            <p className="font-mulish text-[#343942]">
              This will be displayed on the job page
            </p>
          </div>
          <div className="w-full text-xs text-dark">
            <FormCheckbox
              control={control}
              name="show_contact"
              label="Show the name and phone number on this job page"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;

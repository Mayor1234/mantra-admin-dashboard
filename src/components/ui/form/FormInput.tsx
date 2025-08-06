// components/ui/FormInput.tsx
import React from 'react';
import {
  useFormContext,
  Controller,
  type FieldValues,
  type Path,
  type Control,
} from 'react-hook-form';
import { cn } from '../../../shared/lib/utils/cn';

type FormInputProps<T extends FieldValues> = {
  name: Path<T>;
  control?: Control<T>;
  label?: string;
  type?: string;
  placeholder?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
};

export const FormInput = <T extends FieldValues>({
  name,
  control,
  label,
  type = 'text',
  placeholder,
  iconLeft,
  iconRight,
  className,
}: FormInputProps<T>) => {
  // Get context from parent if control not explicitly passed
  const {
    control: contextControl,
    formState: { errors },
  } = useFormContext<T>();

  const error = errors?.[name]?.message as string;

  return (
    <div className="space-y-1 w-full">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-dark">
          {label}
        </label>
      )}
      <div className="relative">
        {iconLeft && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-icon">
            {iconLeft}
          </div>
        )}
        <Controller
          name={name}
          control={control ?? contextControl}
          render={({ field }) => (
            <input
              {...field}
              id={name}
              type={type}
              placeholder={placeholder}
              autoComplete="off"
              className={cn(
                'w-full px-3 py-2 text-[#343942] font-mulish text-sm border border-border rounded-xl h-[2.5rem] focus:outline-none focus:ring focus:ring-active focus:border-active',
                iconLeft ? 'pl-10' : '',
                error && 'border-red-500',
                className
              )}
            />
          )}
        />
        {iconRight && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-icon">
            {iconRight}
          </div>
        )}
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default FormInput;

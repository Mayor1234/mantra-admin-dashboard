import {
  useFormContext,
  Controller,
  type FieldValues,
  type Control,
  type Path,
} from 'react-hook-form';
import { cn } from '../../../shared/lib/utils/cn';

type FormTextareaProps<T extends FieldValues> = {
  name: Path<T>;
  control?: Control<T>;
  label?: string;
  placeholder?: string;
  rows?: number;
  description?: string;
  className?: string;
};

const FormTextarea = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  rows = 4,
  description,
  className,
}: FormTextareaProps<T>) => {
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
      {description && <p className="text-xs text-dark-text">{description}</p>}

      <Controller
        name={name}
        control={control ?? contextControl}
        render={({ field }) => (
          <textarea
            {...field}
            id={name}
            rows={rows}
            placeholder={placeholder}
            className={cn(
              'w-full px-3 py-2 border border-border font-mulish text-sm rounded-xl transition-all duration-300 ease-linear focus:outline-none focus:ring focus:ring-active focus:border-active resize-none',
              error && 'border-red-500',
              className
            )}
          />
        )}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormTextarea;

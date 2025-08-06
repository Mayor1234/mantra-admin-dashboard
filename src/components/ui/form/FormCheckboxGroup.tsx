import {
  useFormContext,
  Controller,
  type FieldValues,
  type Control,
  type Path,
} from 'react-hook-form';

type CheckboxOption = {
  value: string;
  label: string;
};

type FormCheckboxGroupProps<T extends FieldValues> = {
  name: Path<T>;
  options: CheckboxOption[];
  label?: string;
  description?: string;
  direction?: 'row' | 'col';
  control?: Control<T>;
};

const FormCheckboxGroup = <T extends FieldValues>({
  name,
  options,
  label,
  description,
  direction = 'row',
  control,
}: FormCheckboxGroupProps<T>) => {
  const {
    control: contextControl,
    formState: { errors },
  } = useFormContext<T>();

  const error = errors?.[name]?.message as string;

  return (
    <div className="space-y-1">
      {label && <p className="font-medium text-sm text-gray-700">{label}</p>}
      {description && <p className="text-xs text-gray-500">{description}</p>}

      <Controller
        name={name}
        control={control ?? contextControl}
        defaultValue={undefined}
        render={({ field }) => {
          const selectedValues: string[] = field.value || [];

          const handleChange = (checkedValue: string) => {
            if (selectedValues.includes(checkedValue)) {
              field.onChange(
                selectedValues.filter((v: string) => v !== checkedValue)
              );
            } else {
              field.onChange([...selectedValues, checkedValue]);
            }
          };

          return (
            <div className={`flex flex-${direction} gap-y-2 gap-x-4 flex-wrap`}>
              {options.map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-center gap-2 text-sm"
                >
                  <input
                    type="checkbox"
                    value={opt.value}
                    checked={selectedValues.includes(opt.value)}
                    onChange={() => handleChange(opt.value)}
                    className="appearance-none h-4 w-4 text-pry border border-border bg-gray-100 rounded-sm focus:ring-active focus:ring-2 focus:outline-none checked:focus:ring-border focus:ring-offset-2 checked:bg-pry checked:border-transparent"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          );
        }}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormCheckboxGroup;

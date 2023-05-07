import { FC, ReactElement, FocusEventHandler, ChangeEventHandler } from 'react';
interface ICustomInput {
  label: string,
  placeholder?: string,
  required?: boolean,
  value?: string | number,
  name: string,
  error: string | undefined,
  touched?: boolean | undefined,
  className?: string,
  min?: number,
  max?: number,
  maxLength?: number,
  minLength?: number,
  disabled?: boolean,
  type?: string,
  suffixIcon?: ReactElement,
  prefixIcon?: ReactElement,
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined,
  onBlur?: FocusEventHandler<HTMLInputElement>,
}

const CustomInput: FC<ICustomInput> = (props) => {
  const {
    label = '',
    placeholder = '',
    required = true,
    value,
    name,
    error = '',
    touched = false,
    className,
    min,
    max,
    minLength,
    maxLength,
    disabled = false,
    type = 'text',
    suffixIcon = <></>,
    prefixIcon = <></>,
    onChange,
    onBlur,
  } = props;

  const customInputClasses = ['custom-input'];

  if (!disabled) {
    customInputClasses.push('disabled');
  }

  return (
    <div className='custom-input-container'>
      <label className='cutsom-label'>
        {label} {required && <span className='custom-required'>*</span>}
      </label>
      <div>
        <button className='suffix-icon'>{suffixIcon}</button>
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          min={min}
          max={max}
          minLength={minLength}
          maxLength={maxLength}
          disabled={disabled}
          className={customInputClasses.join(' ')}
        />
        <button className='prefix-icon'>{prefixIcon}</button>
      </div>
      <label className='custom-error'>{error}</label>
    </div>
  )
}

export default CustomInput;
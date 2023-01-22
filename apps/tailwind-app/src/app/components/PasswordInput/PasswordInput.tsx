import { forwardRef, useState, MouseEvent } from 'react';
import clsx from 'clsx';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

import { InputProps, Input } from '../Input/Input';

export interface PasswordInputProps extends Omit<InputProps, 'type'> {
  showPassword?: boolean;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const {
      className,
      showPassword: initialShowPassword,
      fullWidth,
      error,
      ...rest
    } = props;
    const [showPassword, setShowPassword] = useState(initialShowPassword);

    const toggleShowPassword = (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
      <div className={clsx('relative', fullWidth ? 'block' : 'inline-block')}>
        <Input
          type={showPassword ? 'text' : 'password'}
          className={clsx('pr-10', className)}
          fullWidth={fullWidth}
          error={error}
          {...rest}
          ref={ref}
        />
        <button
          type="button"
          aria-label={showPassword ? 'hide password' : 'show password'}
          onClick={toggleShowPassword}
          className={clsx(
            'absolute right-0 top-0 h-[42px] w-10',
            // error styles
            !error ? 'text-primary ' : 'text-red-600'
          )}
        >
          {showPassword ? (
            <EyeIcon className="mx-auto h-5 w-5" />
          ) : (
            <EyeSlashIcon className="mx-auto h-5 w-5" />
          )}
        </button>
      </div>
    );
  }
);

export default PasswordInput;

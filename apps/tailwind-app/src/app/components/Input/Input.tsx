import { InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * make input full width, default is false
   */
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, fullWidth, error, helperText, ...rest } = props;

  return (
    <div
      className={clsx(
        typeof helperText === 'string' && 'space-y-0.5',
        !fullWidth && 'inline-block'
      )}
    >
      <input
        className={clsx(
          'enabled:hover:border-primary focus:border-primary rounded border px-4 py-2 outline-none transition-colors disabled:cursor-not-allowed disabled:bg-gray-300',
          // error styles
          error &&
            'border-red-500 text-red-500 focus:border-red-600 enabled:hover:border-red-600',
          fullWidth && 'w-full',
          className
        )}
        {...rest}
        ref={ref}
      />
      {helperText && (
        <p
          className={clsx(
            // default
            'ml-4 text-sm',
            // error styles
            !error ? 'text-gray-500' : 'text-red-600'
          )}
        >
          {helperText}
        </p>
      )}
    </div>
  );
});

export default Input;

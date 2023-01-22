import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PasswordInput from './PasswordInput';

describe('PasswordInput', () => {
  it('should be able to toggle password visibility', async () => {
    render(<PasswordInput aria-label="password input" />);

    const passwordInput = screen.getByLabelText(
      'password input'
    ) as HTMLInputElement;

    expect(passwordInput.type).toEqual('password');

    await userEvent.click(
      screen.getByRole('button', { name: 'show password' })
    );

    expect(passwordInput.type).toEqual('text');
  });
});

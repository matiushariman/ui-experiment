import Button from './components/Button/Button';
import Input from './components/Input/Input';
import PasswordInput from './components/PasswordInput/PasswordInput';

export function App() {
  return (
    <div className="flex">
      <div className="from-primary-dark to-primary h-screen w-[615px] bg-gradient-to-br" />
      <div className="flex flex-1 flex-grow items-center justify-around">
        <div className="w-[475px]">
          <form id="login-form" className="max-w-[475px] space-y-10 p-4">
            <h1 className="text-center text-xl font-bold uppercase">
              Admin Dashboard
            </h1>
            <div className="space-y-6">
              <div className="space-y-4">
                <Input
                  data-testid="username-input"
                  aria-label="username input"
                  placeholder="username"
                  fullWidth
                />
                <PasswordInput
                  data-testid="password-input"
                  aria-label="password input"
                  placeholder="password"
                  fullWidth
                />
              </div>
              <div className="text-center">
                <Button data-testid="login-btn" type="submit">
                  Login
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

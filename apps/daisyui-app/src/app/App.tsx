// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.module.css';
import NxWelcome from './nx-welcome';

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
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary"
                  data-testid="login-btn"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

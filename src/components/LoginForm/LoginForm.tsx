
// imports from vendors
import React, { FC, useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid';

// imports from clientState
import { useAuth } from '../../clientState/auth';

const LoginForm: FC = () => {
  const { authenticate } = useAuth();
  const [values, setValues] = useState({ username: '', password: '' });

  // @ts-ignore
  const onInputChange = ({ target }) => setValues(
    (prevState) => ({ ...prevState, [target.name]: target.value})
  );

  const onAuth = () => authenticate(values);

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-8 space-y-6">
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  autoComplete="username"
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  id="username"
                  name="username"
                  onChange={onInputChange}
                  placeholder="Email address"
                  required
                  type="text"
                  value={values.username}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  autoComplete="current-password"
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  id="password"
                  name="password"
                  onChange={onInputChange}
                  placeholder="Password"
                  required
                  type="password"
                  value={values.password}
                />
              </div>
            </div>

            <div>
              <button
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={onAuth}
                type="submit"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LoginForm

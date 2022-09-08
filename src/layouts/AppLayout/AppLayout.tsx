
// imports from vendors
import React, { FC } from 'react';

// imports from clientState
import { useAuth } from '../../clientState/auth';

// imports from components
import Dashboard from '../../components/Dashboard/Dashboard';
import LoginForm from '../../components/LoginForm/LoginForm';

// imports from constants
import {
  BUTTON_LINK_PRIMARY,
  PAGE_FOOTER,
  PAGE_HEADER,
} from '../../constants/styles'

const AppLayout: FC = () => {
  const { destroyAuth, isAuthenticated } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <header className={PAGE_HEADER}>
        <div className="flex justify-start">
          Temp Control Dashboard
          <span className="sr-only">Temp Control Dashboard</span>
        </div>

        { isAuthenticated && (
          <div className={BUTTON_LINK_PRIMARY} onClick={destroyAuth}>
            Logout
          </div>
        ) }
      </header>

      <div className="bg-slate-50 flex-grow">
        { !isAuthenticated && <LoginForm /> }
        { isAuthenticated && <Dashboard />}
      </div>

      <footer className={PAGE_FOOTER}>
        <span className="block text-sm text-slate-500">© 2022 Andrii Karpenko</span>
      </footer>
    </div>
);
};

export default AppLayout;

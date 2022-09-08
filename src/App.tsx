// imports from vendors
import React from 'react';

// imports from clientState
import { AuthContextProvider } from './clientState/auth';

// imports from layouts
import AppLayout from './layouts/AppLayout/AppLayout';

function App() {
  return (
    <AuthContextProvider>
      <AppLayout />
    </AuthContextProvider>
  );
}

export default App;

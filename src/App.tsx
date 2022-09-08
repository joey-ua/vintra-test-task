// imports from vendors
import React from 'react';
import { SWRConfig } from 'swr';

// imports from clientState
import { AuthContextProvider } from './clientState/auth';

// imports from layouts
import AppLayout from './layouts/AppLayout/AppLayout';

const config = {
  fetcher: (resource: any, init: any) => fetch(resource, init).then((res) => res.json()),
};

function App() {
  return (
    <AuthContextProvider>
      <SWRConfig value={config}>
        <AppLayout />
      </SWRConfig>
    </AuthContextProvider>
  );
}

export default App;

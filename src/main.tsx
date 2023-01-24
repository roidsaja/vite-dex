import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Layout from './components/Layout/Layout';
import GlobalStyles from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <GlobalStyles />
      <App />
    </Layout>
  </React.StrictMode>
);

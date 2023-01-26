import React from 'react';
import { Outlet } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';

import { darkTheme } from '../../styles/globalStyles';
import { ReactComponent as CloudOffline } from '/src/assets/cloud-offline.svg';
import Nav from '../Nav';
import { toast, Toaster, ToastBar } from 'react-hot-toast';

const Layout: React.FC = () => {
  const [isOnline, setIsOnline] = React.useState<boolean | null>(() =>
    getIsOnline()
  );

  function setOffline() {
    setIsOnline(false);
    toast.loading('You Are Currently Offline', { icon: <CloudOffline /> });
  }

  function setOnline() {
    setIsOnline(true);
    toast.dismiss();
  }

  React.useEffect(() => {
    // eslint-disable-next-line no-negated-condition
    if (typeof window !== 'undefined') {
      window.addEventListener('online', setOnline);
      window.addEventListener('offline', setOffline);

      return () => {
        window.removeEventListener('online', setOnline);
        window.removeEventListener('offline', setOffline);
      };
    } else {
      console.warn('useOnline: window is undefined.');
    }
  });

  return (
    <NextUIProvider theme={darkTheme}>
      <Toaster
        toastOptions={{
          // Define default options
          loading: {
            position: 'bottom-right',
            duration: Infinity,
            style: {
              background: '#363636',
              color: '#fff',
              transition: 'all 0.5s ease-out',
            },
          },
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
      <Nav />
      <Outlet />
    </NextUIProvider>
  );
};

const getIsOnline = (): boolean | null => {
  if (typeof window === 'undefined') {
    return null;
  }
  return navigator.onLine;
};

export default Layout;

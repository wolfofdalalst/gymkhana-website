'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="5px"
        color="#18216d"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;
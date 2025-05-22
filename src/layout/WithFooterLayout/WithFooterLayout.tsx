import { FC, ReactNode } from 'react';
import Footer from 'src/components/features/Footer';

const WithFooterLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="app-content-container">{children}</div>
      <Footer />
    </>
  );
};

export default WithFooterLayout;

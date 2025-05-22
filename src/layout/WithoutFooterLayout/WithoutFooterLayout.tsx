import { FC, ReactNode } from 'react';

const WithoutFooterLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="app-content-container">{children}</div>;
};

export default WithoutFooterLayout;

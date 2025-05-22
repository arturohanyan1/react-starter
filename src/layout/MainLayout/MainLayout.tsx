import { FC, ReactNode } from 'react';
import Header from 'src/components/features/Header';
import styles from './styles.module.scss';

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className={styles.layout}>
      <Header />
      {children}
    </main>
  );
};

export default MainLayout;

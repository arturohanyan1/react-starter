import { FC, lazy, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { EnumRoutePaths } from 'src/configs/routes';
import { useConnectedAction } from 'src/hooks/use-connected-action';
import MainLayout from 'src/layout/MainLayout';
import WithFooterLayout from 'src/layout/WithFooterLayout';
import { setTheme } from 'src/store/app/actions';
import { setLogout } from 'src/store/user/actions';
import { RootState } from 'src/types/store-types';
import { APP_THEMES } from 'src/utils/constants';
import { isTokenExpired, setPaletteHandler } from 'src/utils/helpers';

const Main = lazy(() => import('./../pages/Main'));

const AppRoutes: FC = () => {
  // Redux
  const _setTheme = useConnectedAction(setTheme.req);
  const _logout = useConnectedAction(setLogout);

  // Selectors
  const { user } = useSelector((state: RootState) => state.user);
  const { selectedTheme } = useSelector((state: RootState) => state.app);
  const isAuthenticated = user && !isTokenExpired();

  // Effects
  useEffect(() => {
    if (isTokenExpired()) {
      _logout();
    }
  }, []);

  useEffect(() => {
    if (APP_THEMES.includes(selectedTheme)) {
      setPaletteHandler(selectedTheme);
    } else {
      const newTheme = APP_THEMES[0];
      localStorage.setItem('selectedTheme', newTheme);
      _setTheme(newTheme);
    }
  }, [selectedTheme]);

  console.log(isAuthenticated);

  return (
    <MainLayout>
      <Routes>
        <Route
          path={EnumRoutePaths.BASE}
          element={
            <WithFooterLayout>
              <Main />
            </WithFooterLayout>
          }
        />
        <Route path="*" element={<Navigate to={EnumRoutePaths.BASE} replace />} />
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes;

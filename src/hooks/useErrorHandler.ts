import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { EnumDialogs } from 'src/configs/dialogs';
import { openDialog } from 'src/store/dialogs/actions';
import { setLogout } from 'src/store/user/actions';
import { getErrorDescription, getErrorMessage } from 'src/utils/apiHelpers';
import { useConnectedAction } from './use-connected-action';

const useErrorHandler = (): any => {
  const { t }: any = useTranslation();

  // Redux
  const _openDialog = useConnectedAction(openDialog.req);
  const _logout = useConnectedAction(setLogout);

  return useCallback(
    (error: any, defineErrorDescription = false): any => {
      console.error(error);
      if (error.response && error.response?.data?.message?.key === 'invalid_token') {
        _logout();
      } else {
        const errorMessage = defineErrorDescription ? getErrorDescription(error) : getErrorMessage(t, error);
        const requestTrackId = error.response?.data?.requestTrackId || error.requestTrackId || '';

        _openDialog({
          id: EnumDialogs.BASE_ERROR_DIALOG,
          data: { requestTrackId: requestTrackId, errorMessage: errorMessage },
        });
      }
    },
    [t, _logout]
  );
};

export default useErrorHandler;

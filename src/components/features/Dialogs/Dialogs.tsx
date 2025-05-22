import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { EnumDialogs } from 'src/configs/dialogs';
import { RootState } from 'src/types/store-types';
import BaseErrorDialog from './BaseErrorDialog';

const Dialogs: FC = () => {
  // Redux
  const { dialogs } = useSelector((state: RootState) => state.dialogs);

  return (
    <>
      {dialogs[EnumDialogs.BASE_ERROR_DIALOG]?.isOpen && (
        <BaseErrorDialog
          isOpen={dialogs[EnumDialogs.BASE_ERROR_DIALOG]?.isOpen}
          data={dialogs[EnumDialogs.BASE_ERROR_DIALOG]?.data}
        />
      )}
    </>
  );
};

export default Dialogs;

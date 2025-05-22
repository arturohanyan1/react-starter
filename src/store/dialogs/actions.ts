import { createAction } from 'deox';
import { IDialogParamsType } from 'src/types/common-types/common';
import { CLOSE_DIALOG, OPEN_DIALOG } from './types';

export const openDialog = {
  req: createAction(OPEN_DIALOG, (res) => (params: IDialogParamsType) => res(params)),
};

export const closeDialog = {
  req: createAction(CLOSE_DIALOG, (res) => (params: any) => res(params)),
};

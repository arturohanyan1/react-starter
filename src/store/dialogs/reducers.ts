import { createReducer } from 'deox';
import produce from 'immer';
import { closeDialog, openDialog } from './actions';
import { dialogsState } from './types';

export const dialogsInitialState: dialogsState = {
  dialogs: {},
};

export const dialogsReducer = createReducer(dialogsInitialState, (handle) => [
  handle(openDialog.req, (state, { payload }: any) =>
    produce(state, (draft) => {
      draft.dialogs = {
        ...draft.dialogs,
        [payload.id]: {
          isOpen: true,
          data: payload?.data ?? null,
        },
      };
    })
  ),
  handle(closeDialog.req, (state, { payload }: any) =>
    produce(state, (draft) => {
      delete draft.dialogs[payload];
    })
  ),
]);

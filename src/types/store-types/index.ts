/* eslint-disable @typescript-eslint/naming-convention */
import { appState } from 'src/store/app/types';
import { dialogsState } from 'src/store/dialogs/types';
import { userState } from 'src/store/user/types';

export interface RootState {
  user: userState;
  app: appState;
  dialogs: dialogsState;
}

export interface ISagaReqStructure {
  onSuccessCb?: (arg?: any) => void;
  onFailCb?: (arg?: any) => void;
}

export interface IReqPayloadStructure {
  result: any;
  success: boolean;
  message?: any;
  messageParams?: any;
  documentKey?: string;
  messageKey?: string;
  pendingOtpVerification?: boolean;
  status?: number;
}

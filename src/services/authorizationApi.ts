import { ISignInPayload } from 'src/types/req-dto/authorization';
import { IReqPayloadStructure } from 'src/types/store-types';
import { APP_API_VERSION } from '../utils/constants';
import { HttpClient } from './http';

const signInRequest = (payload: ISignInPayload): Promise<IReqPayloadStructure> => {
  return HttpClient.post(
    { path: `${APP_API_VERSION}/authenticatePlayer`, baseURL: process.env.REACT_APP_REMOTE as string },
    payload,
    false
  );
};

export { signInRequest };

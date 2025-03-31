import { AxiosResponse } from 'axios';

export interface IApiProps {
  path: string;
  method: string;
  data?: object;
  contentType?: string;
  query?: string;
}

export interface ICallbacksApi {
  successCallback?: (response: AxiosResponse) => void;
  errorCallback?: (error: any) => void;
  finallyCallback?: () => void;
}

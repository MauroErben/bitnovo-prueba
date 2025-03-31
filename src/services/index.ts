import axios from 'axios';
import { API_BASE_URL } from '../enviroments';
import { IApiProps } from './types';

const api = axios.create({
  baseURL: API_BASE_URL,
});

const getApi = async ({
  path,
  method,
  data,
  contentType,
  query = '',
}: IApiProps) => {
  try {
    const XDeviceId = process.env.EXPO_PUBLIC_DEVICE_ID;
    const response = await api({
      method,
      headers: {
        'Content-Type': contentType,
        'X-Device-Id': XDeviceId,
      },
      url: `${path}${query}`,
      data,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default getApi;

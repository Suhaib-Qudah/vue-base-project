import { AxiosError } from 'axios';

export const handleAxiosError = async (
  error: AxiosError<Record<string, unknown>>
) => {
  const errorCode = error?.response?.data?.errorCode as number;
  if (errorCode) {
    await handleAuthError(errorCode);
  }
  return Promise.reject<AxiosError>(error);
};

export const handleAuthError = async (errorCode: number) => {
  console.log('errorCode', errorCode);
};

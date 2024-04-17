import { useMemo } from 'react';
import ky from 'ky';
import { api } from '../api';

const prefixUrl = 'https://dog.ceo/api/';
type ApiMethod = keyof ReturnType<typeof api>;

/**
 * This hook is designed to facilitate API calls within the application.
 * It leverages `ky` to create an HTTP client pre-configured with a base URL and default headers.
 * The hook accepts an API method name as a parameter and memoizes the creation of the API client.
 */

export const useApi = <T extends ApiMethod>(method: T) => {
  const apiClient = useMemo(
    () => ky.create({ prefixUrl, headers: { Accept: 'application/json' } }),
    [],
  );

  return api(apiClient)[method];
};

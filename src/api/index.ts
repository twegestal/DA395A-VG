import ky from 'ky';
import { dogApi } from './dogApi';

export const api = (apiClient: typeof ky) => Object.freeze({ ...dogApi(apiClient) });

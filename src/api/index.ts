import ky from 'ky';
import { dogApi } from './dogApi';

/**
 * Sets up and exports the API utility functions using `ky`.
 */

export const api = (apiClient: typeof ky) => Object.freeze({ ...dogApi(apiClient) });

import { useCallback } from 'react';
import { LOCAL_STORAGE_TOKEN_KEY } from '../constants';

export const useLocalStorage = () => {
  const getToken = useCallback(() => localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY), []);
  const setToken = useCallback((token: string) => localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token), []);

  return {
    getToken,
    setToken,
  };
};

import { storage } from './storage';
import { storageKeys } from './constants';

const includesNoCaseSensitive = (str1, str2) =>
  str1.toUpperCase().includes(str2.toUpperCase());

const getAuthUser = () => {
  return storage.get(storageKeys.AUTHENTICATED);
};

export { includesNoCaseSensitive, getAuthUser };

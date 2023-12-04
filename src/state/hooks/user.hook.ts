import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  selectUser,
  selectToken,
} from '../reducers/auth.reducer';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);


  return useMemo(() => ({ user, token }), [user, token]);
};

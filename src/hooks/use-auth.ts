import { useAppSelector } from './use-hooks'

export function useAuth() {
  const { data, login, password } = useAppSelector((state) => state.user);

  return {
    isAuth: !!data,
    data,
    login,
    password,
  };
}
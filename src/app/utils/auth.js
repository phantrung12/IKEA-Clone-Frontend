import { LocalStorageService } from "../service";

export const isAuthenticated = () => {
  const accessToken = LocalStorageService.get(LocalStorageService.OAUTH_TOKEN);
  return !!accessToken && accessToken.length > 0;
};

export const logout = () => {
  LocalStorageService.removeItem(LocalStorageService.OAUTH_TOKEN);
};

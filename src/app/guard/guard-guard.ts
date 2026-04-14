import { CanActivateFn } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('access_token') == null) {
    return false;
  }

  return true;
};

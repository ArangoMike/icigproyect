import { CanActivateFn } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {

  const user = document.cookie.includes('user');
  return user;
};

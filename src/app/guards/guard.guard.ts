import { CanActivateFn } from '@angular/router';

// Este código define un guardia de ruta (route guard) en Angular.

// Importante: En Angular, los guardias de ruta deben implementar la interfaz CanActivateFn.

// La siguiente línea declara un guardia de ruta llamado guardGuard.
export const guardGuard: CanActivateFn = (route, state) => {

   // Se comprueba si la cookie 'user' está presente en el documento.
  const user = document.cookie.includes('user');
  
   // Se retorna el resultado de la verificación como un valor booleano.
  return user;
};

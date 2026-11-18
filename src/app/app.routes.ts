import { Routes } from '@angular/router';
import DashboardPage from './gifs/pages/dashboard-page/dashboard-page';

export const routes: Routes = [
  {
    path: 'dashboard',
    // 1. Carga perezosa del Cascarón Principal (Layout Shell)
    loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page'),
    children: [
      {
        path: 'trending',
        // 2. Carga perezosa de la vista de Tendencias dentro del Dashboard
        loadComponent: () => import('./gifs/pages/trending-page/trending-page'),
      },
      {
        path: 'search',
        // 3. Carga perezosa del Buscador (solo se descarga al navegar a /search)
        loadComponent: () => import('./gifs/pages/search-page/search-page'),
      },
      {
        // 4. Comodín hijo: cualquier subruta no reconocida bajo /dashboard redirige a /dashboard/trending
        path: '**',
        redirectTo: 'trending',
      },
    ],
  },
  {
    // 5. Comodín raíz: cualquier ruta desconocida redirige al dashboard
    path: '**',
    redirectTo: 'dashboard',
  },
];

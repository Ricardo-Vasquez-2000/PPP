import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Sistemas'
    },
    children: [
        {
          path: '',
          redirectTo: 'list-systems',
          pathMatch: 'full'
        },
        {
          path: 'list-systems',
          loadComponent: () => import('./list-systems/list-systems.component').then(m => m.ListSystemsComponent),
          data: {
            title: 'Lista de Sistemas'
          }
        },
        {
          path: 'add-systems',
          loadComponent: () => import('./add-systems/add-systems.component').then(m => m.AddSystemsComponent),
          data: {
            title: 'Agregar Sistema'
          }
        },
        {
          path: 'edit-systems',
          loadComponent: () => import('./edit-systems/edit-systems.component').then(m => m.EditSystemsComponent),
          data: {
            title: 'Editar Sistema'
          }
        },
         
      ]
  }
];
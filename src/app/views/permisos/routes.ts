import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Permisos'
    },
    children: [
        {
          path: '',
          redirectTo: 'list-permissions',
          pathMatch: 'full'
        },
        {
          path: 'list-permissions',
          loadComponent: () => import('./list-permissions/list-permissions.component').then(m => m.ListPermissionsComponent),
          data: {
            title: 'Lista de Permisos'
          }
        },
        {
          path: 'add-permissions',
          loadComponent: () => import('./add-permissions/add-permissions.component').then(m => m.AddPermissionsComponent),
          data: {
            title: 'Agregar Permisos'
          }
        },
        {
          path: 'edit-permissions',
          loadComponent: () => import('./edit-permissions/edit-permissions.component').then(m => m.EditPermissionsComponent),
          data: {
            title: 'Editar Permisos'
          }
        },
         
      ]
  }
];
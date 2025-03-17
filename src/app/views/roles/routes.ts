import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Roles'
    },
    children: [
        {
          path: '',
          redirectTo: 'list-roles',
          pathMatch: 'full'
        },
        {
          path: 'list-roles',
          loadComponent: () => import('./list-roles/list-roles.component').then(m => m.ListRolesComponent),
          data: {
            title: 'Lista de Roles'
          }
        },
        {
          path: 'add-roles',
          loadComponent: () => import('./add-roles/add-roles.component').then(m => m.AddRolesComponent),
          data: {
            title: 'Agregar Roles'
          }
        },
        {
          path: 'edit-roles',
          loadComponent: () => import('./edit-roles/edit-roles.component').then(m => m.EditRolesComponent),
          data: {
            title: 'Editar Sistema'
          }
        },
         
      ]
  }
];
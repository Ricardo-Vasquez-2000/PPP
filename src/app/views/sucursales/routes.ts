import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Empresas'
    },
    children: [
        {
          path: '',
          redirectTo: 'list-branches',
          pathMatch: 'full'
        },
        {
          path: 'list-branches',
          loadComponent: () => import('./list-branches/list-branches.component').then(m => m.ListBranchesComponent),
          data: {
            title: 'Lista de Sucursales'
          }
        },
        {
          path: 'add-branches',
          loadComponent: () => import('./add-branches/add-branches.component').then(m => m.AddBranchesComponent),
          data: {
            title: 'Agregar Sucursal'
          }
        },
        {
          path: 'edit-branches',
          loadComponent: () => import('./edit-branches/edit-branches.component').then(m => m.EditBranchesComponent),
          data: {
            title: 'Editar Sucursal'
          }
        },
         
      ]
  }
];

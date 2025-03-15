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
        redirectTo: 'list-enterprises',
        pathMatch: 'full'
      },
      {
        path: 'list-enterprises',
        loadComponent: () => import('./list-enterprises/list-enterprises.component').then(m => m.ListEnterprisesComponent),
        data: {
          title: 'Lista de Empresas'
        }
      },
      {
        path: 'add-company',
        loadComponent: () => import('./add-company/add-company.component').then(m => m.AddCompanyComponent),
        data: {
          title: 'Agregar Empresa'
        }
      },
      {
        path: 'edit-company',
        loadComponent: () => import('./edit-company/edit-company.component').then(m => m.EditCompanyComponent),
        data: {
          title: 'Editar Empresa'
        }
      },
       
    ]
  }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'empresas'
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
          title: 'lista de empresas'
        }
      },
      
       
    ]
  }
];

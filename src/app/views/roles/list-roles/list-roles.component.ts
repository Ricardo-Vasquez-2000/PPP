import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@coreui/angular';
import { TableModule, UtilitiesModule } from '@coreui/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-roles',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, TableModule, UtilitiesModule],
  templateUrl: './list-roles.component.html',
  styleUrl: './list-roles.component.scss'
})
export class ListRolesComponent {
  private readonly router = inject(Router)
  roles = [
    { code: '01', name: 'Roles 1', editing: false },
    { code: '02', name: 'Roles 2', editing: false },
    { code: '03', name: 'Roles 3', editing: false },
    { code: '04', name: 'Roles 4', editing: false },
    { code: '05', name: 'Roles 5', editing: false }
  ];

  addRoles() {
    const newCode = (this.roles.length + 1).toString().padStart(2, '0');
    this.roles.push({ code: newCode, name: 'Nuevo Rol', editing: false });
    this.router.navigate(['/roles/add-roles']);
  }

  editRoles(roles: any) {
    roles.editing = true;
  }

  saveRoles(roles: any) {
    roles.editing = false;
  }

  deleteRoles(index: number) {
    this.roles.splice(index, 1);
  }
}

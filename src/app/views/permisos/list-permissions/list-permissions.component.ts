import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@coreui/angular';
import { TableModule, UtilitiesModule } from '@coreui/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-permissions',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, TableModule, UtilitiesModule],
  templateUrl: './list-permissions.component.html',
  styleUrl: './list-permissions.component.scss'
})
export class ListPermissionsComponent {
  private readonly router = inject(Router)
  permissions = [
    { code: '01', name: 'Permiso 1', editing: false },
    { code: '02', name: 'Permiso 2', editing: false },
    { code: '03', name: 'Permiso 3', editing: false },
    { code: '04', name: 'Permiso 4', editing: false },
    { code: '05', name: 'Permiso 5', editing: false }
  ];

  addPermissions() {
    const newCode = (this.permissions.length + 1).toString().padStart(2, '0');
    this.permissions.push({ code: newCode, name: 'Nuevo Rol', editing: false });
    this.router.navigate(['/permisos/add-permissions']);
  }

  editPermissions(permissions: any) {
    permissions.editing = true;
  }

  savePermissions(permissions: any) {
    permissions.editing = false;
  }

  deletePermissions(index: number) {
    this.permissions.splice(index, 1);
  }
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@coreui/angular';
import { TableModule, UtilitiesModule } from '@coreui/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-branches',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, TableModule, UtilitiesModule],
  templateUrl: './list-branches.component.html',
  styleUrl: './list-branches.component.scss'
})
export class ListBranchesComponent {
  private readonly router = inject(Router)
  branches = [
    { code: '01', name: 'Sucursal 1', editing: false },
    { code: '02', name: 'Sucursal 2', editing: false },
    { code: '03', name: 'Sucursal 3', editing: false },
    { code: '04', name: 'Sucursal 4', editing: false },
    { code: '05', name: 'Sucursal5', editing: false }
  ];

  addBranches() {
    const newCode = (this.branches.length + 1).toString().padStart(2, '0');
    this.branches.push({ code: newCode, name: 'Nueva Sucursal', editing: false });
    this.router.navigate(['/sucursales/add-branches']);
  }

  editBranches(branches: any) {
    branches.editing = true;
  }

  saveBranches(branches: any) {
    branches.editing = false;
  }

  deleteBranches(index: number) {
    this.branches.splice(index, 1);
  }
}
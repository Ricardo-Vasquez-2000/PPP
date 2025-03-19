import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@coreui/angular';
import { TableModule, UtilitiesModule } from '@coreui/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-list-enterprises',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, TableModule, UtilitiesModule],
  templateUrl: './list-enterprises.component.html',
  styleUrls: ['./list-enterprises.component.scss']
})
export class ListEnterprisesComponent {
  private readonly router = inject(Router)
  enterprises = [
    { code: '01', name: 'Empresa 1', editing: false },
    { code: '02', name: 'Empresa 2', editing: false },
    { code: '03', name: 'Empresa 3', editing: false },
    { code: '04', name: 'Empresa 4', editing: false },
    { code: '05', name: 'Empresa 5', editing: false }
  ];

  addEnterprise() {
    const newCode = (this.enterprises.length + 1).toString().padStart(2, '0');
    this.enterprises.push({ code: newCode, name: 'Nueva Empresa', editing: false });
    this.router.navigate(['/empresas/add-company']);
  }

  editEnterprise(enterprise: any) {
    enterprise.editing = true;
  }

  saveEnterprise(enterprise: any) {
    enterprise.editing = false;
  }

  deleteEnterprise(index: number) {
    this.enterprises.splice(index, 1);
  }
}

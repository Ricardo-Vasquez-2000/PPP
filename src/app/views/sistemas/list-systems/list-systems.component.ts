import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@coreui/angular';
import { TableModule, UtilitiesModule } from '@coreui/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-systems',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, TableModule, UtilitiesModule],
  templateUrl: './list-systems.component.html',
  styleUrl: './list-systems.component.scss'
})
export class ListSystemsComponent {
private readonly router = inject(Router)
  systems = [
    { code: '01', name: 'Sistema 1', editing: false },
    { code: '02', name: 'Sistema 2', editing: false },
    { code: '03', name: 'Sistema 3', editing: false },
    { code: '04', name: 'Sistema 4', editing: false },
    { code: '05', name: 'Sistema 5', editing: false }
  ];

  addSystems() {
    const newCode = (this.systems.length + 1).toString().padStart(2, '0');
    this.systems.push({ code: newCode, name: 'Nuevo Sistema', editing: false });
    this.router.navigate(['/sistemas/add-systems']);
  }

  editSystems(systems: any) {
    systems.editing = true;
  }

  saveSystems(systems: any) {
    systems.editing = false;
  }

  deleteSystems(index: number) {
    this.systems.splice(index, 1);
  }
}

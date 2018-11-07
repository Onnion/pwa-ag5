import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const material = [
    MatInputModule,
    MatFormFieldModule
];


@NgModule({
  imports: [...material, CommonModule],
  exports: material
})
export class MaterialModule {}

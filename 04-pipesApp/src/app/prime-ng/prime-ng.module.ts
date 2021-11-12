import { NgModule } from '@angular/core';


import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    BadgeModule,
    RippleModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimeNgModule { }

import { NgModule } from '@angular/core';

import { BalanceRoutingModule } from './balance-routing.module';
import { BalanceComponent } from './balance.component';
import { CasualComponent } from './casual/casual.component';
import { EarnedComponent } from './earned/earned.component';
import { Page404balancedComponent } from './page404balanced/page404balanced.component';


@NgModule({
  declarations: [
    BalanceComponent,
    CasualComponent,
    EarnedComponent,
    Page404balancedComponent
  ],
  imports: [
    BalanceRoutingModule
  ]
})
export class BalanceModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './balance.component';
import { CasualComponent } from './casual/casual.component';
import { EarnedComponent } from './earned/earned.component';
import { Page404balancedComponent } from './page404balanced/page404balanced.component';

const routes: Routes = [
  {
    path: '',
    component: BalanceComponent,
    children: [
      { path: 'casual', component: CasualComponent },
      { path: 'earned', component: EarnedComponent },
      { path: '', redirectTo: 'casual', pathMatch: 'full' },
      { path: '**', component: Page404balancedComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalanceRoutingModule {}

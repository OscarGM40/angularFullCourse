import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendanceComponent } from './levelOne/attendance/attendance.component';
import { DashboardComponent } from './levelOne/dashboard/dashboard.component';
import { Page404Component } from './levelOne/page404/page404.component';
import { ProfileComponent } from './levelOne/profile/profile.component';
// los componentes se declaran en el modulo que los carga
// import { LeavesComponent } from './levelOne/leaves/leaves.component';
// import { ApplyComponent } from './levelOne/leaves/apply/apply.component';
// import { Page404leavesComponent } from './levelOne/leaves/page404leaves/page404leaves.component';
// import { BalanceComponent } from './levelOne/leaves/balance/balance.component';
// import { CasualComponent } from './levelOne/leaves/balance/casual/casual.component';
// import { EarnedComponent } from './levelOne/leaves/balance/earned/earned.component';
// import { Page404balancedComponent } from './levelOne/leaves/balance/page404balanced/page404balanced.component';
;

@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    DashboardComponent,
    Page404Component,
    ProfileComponent,
    // LeavesComponent,
    // ApplyComponent,
    // Page404leavesComponent,
    // BalanceComponent,
    // CasualComponent,
    // EarnedComponent,
    // Page404balancedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './levelOne/attendance/attendance.component';
import { DashboardComponent } from './levelOne/dashboard/dashboard.component';
import { ProfileComponent } from './levelOne/profile/profile.component';
import { Page404Component } from './levelOne/page404/page404.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'attendance', component: AttendanceComponent },
  {
    path: 'leaves',
    loadChildren: () =>
      import('./levelOne/leaves/leaves.module').then((m) => m.LeavesModule),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

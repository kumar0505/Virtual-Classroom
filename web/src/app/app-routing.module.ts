import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGaurdService as AdminGaurd } from './modules/auth/admin-gaurd.service';
import { AuthGaurdService as AuthGaurd } from './modules/auth/auth-gaurd.service';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'classroom', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'classroom', loadChildren: () => import('./modules/classroom/classroom.module').then(m => m.ClassroomModule), canActivate: [AuthGaurd] },
  { path: 'setting', loadChildren: () => import('./modules/setting/setting.module').then(m => m.SettingModule), canActivate: [AuthGaurd, AdminGaurd] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

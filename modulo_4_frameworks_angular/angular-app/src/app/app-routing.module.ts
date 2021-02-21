import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './public/pages/about/about.component';
import { DashboardComponent } from './private/pages/dashboard/dashboard.component';
import { GalleryComponent } from './private/pages/gallery/gallery.component';
import { LoginComponent } from './public/pages/login/login.component';
import { ProfileComponent } from './private/pages/profile/profile.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './public/pages/home/home.component';
import { CrudComponent } from './private/pages/crud/crud.component';

const routes: Routes = [
  { path: '', redirectTo: localStorage.getItem('username') ? 'dashboard' : 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthService] },
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthService] },
  { path: 'crud', component: CrudComponent, canActivate: [AuthService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

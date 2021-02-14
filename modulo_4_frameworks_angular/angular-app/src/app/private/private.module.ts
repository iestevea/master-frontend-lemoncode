import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PrivateMenuComponent } from './components/private-menu/private-menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { CrudComponent } from './pages/crud/crud.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [PrivateMenuComponent, CrudComponent, DashboardComponent, GalleryComponent, ProfileComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule
  ],
  exports: [PrivateMenuComponent]
})

export class PrivateModule { }

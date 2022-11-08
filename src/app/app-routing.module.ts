import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RentalsComponent } from './components/rentals/rentals.component';

const routes: Routes = [
  { path: '', redirectTo: 'acasa', pathMatch: 'full' },
  { path: 'acasa', component: HomeComponent },
  { path: 'despre', component: AboutComponent },
  { path: 'echipa', component: RentalsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

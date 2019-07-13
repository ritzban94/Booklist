import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookUIComponent } from './book-ui/book-ui.component';     // Add your component here
import { AboutComponent } from './about/about.component';
import { ChartsComponent } from './charts/charts.component'

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: BookUIComponent },
    { path: 'about', component: AboutComponent },
    { path: 'stats', component: ChartsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BookUIComponent, AboutComponent, ChartsComponent]
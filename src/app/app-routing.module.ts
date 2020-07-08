import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'about', component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

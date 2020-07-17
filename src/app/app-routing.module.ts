import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { AccountComponent } from './components/account/account.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ViewGamesComponent } from './components/view-games/view-games.component';


const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'about', component: AboutComponent},
  { path: 'create', component: CreateArticleComponent},
  { path: 'account', component: AccountComponent},
  { path: 'articles', component: ArticlesComponent},
  { path: 'viewgames', component: ViewGamesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

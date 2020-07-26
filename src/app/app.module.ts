import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire'; 
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedarticleComponent } from './components/featuredarticle/featuredarticle.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FeaturedgamesComponent } from './components/featuredgames/featuredgames.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { AccountComponent } from './components/account/account.component';
import { AllArticlesComponent } from './components/all-articles/all-articles.component';
import { ViewGamesComponent } from './components/view-games/view-games.component';
import { UserService } from './services/user.service'; 


var firebaseConfig = {
  apiKey: "AIzaSyCmS4JUEsqvHDcxndIYYTjWs-DHGFZ_08M",
  authDomain: "parent-gaming-guide.firebaseapp.com",
  databaseURL: "https://parent-gaming-guide.firebaseio.com",
  projectId: "parent-gaming-guide",
  storageBucket: "parent-gaming-guide.appspot.com",
  messagingSenderId: "644341968952",
  appId: "1:644341968952:web:8cb23c91c7fafe979ef6cd",
  measurementId: "G-REXE6PRJZR"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FeaturedarticleComponent,
    SearchbarComponent,
    FeaturedgamesComponent,
    ArticlesComponent,
    MainPageComponent,
    ContactPageComponent,
    AboutComponent,
    LoginComponent,
    CreateArticleComponent,
    AccountComponent,
    AllArticlesComponent,
    ViewGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

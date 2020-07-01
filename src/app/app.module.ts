import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedarticleComponent } from './components/featuredarticle/featuredarticle.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FeaturedgamesComponent } from './components/featuredgames/featuredgames.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

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
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

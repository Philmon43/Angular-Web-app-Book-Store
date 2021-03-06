import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BookBannerComponent } from './components/book-banner/book-banner.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookDeatilsComponent } from './pages/book-deatils/book-deatils.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { RoundButtonComponent } from './components/buttons/round-button/round-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { HyperlinksComponent } from './components/hyperlinks/hyperlinks.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HeaderComponent,
    BookBannerComponent,
    BookCardComponent,
    BookDeatilsComponent,
    MainPageComponent,
    RoundButtonComponent,
    FooterComponent,
    HyperlinksComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

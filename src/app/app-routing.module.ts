import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDeatilsComponent } from './pages/book-deatils/book-deatils.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  { path: 'book-details', component: BookDeatilsComponent },
  { path: '', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

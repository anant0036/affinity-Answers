import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatOneComponent } from './components/cat-one/cat-one.component';
import { CatTwoComponent } from './components/cat-two/cat-two.component';

const routes: Routes = [
  { path: '', redirectTo: 'men', pathMatch: 'full' },
  { path: 'men', component: CatOneComponent },
  { path: 'women', component: CatTwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

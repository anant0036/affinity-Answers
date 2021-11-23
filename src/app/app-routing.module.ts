import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatOneComponent } from './components/cat-one/cat-one.component';
import { CatTwoComponent } from './components/cat-two/cat-two.component';
import { CatThreeComponent } from './components/cat-three/cat-three.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'men', pathMatch: 'full' },
  { path: 'men', component: CatOneComponent },
  { path: 'women', component: CatTwoComponent },
  { path: 'application', component: CatThreeComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

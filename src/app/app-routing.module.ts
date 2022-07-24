import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NothingComponent } from './pages/nothing/nothing.component';
import { ProductsComponent } from './pages/products/products.component';
import { StoreComponent } from './pages/store/store.component';


/**
 * lazy loadin can be implemented to decrease load time for specific routes as follow.
 * 
 */

/**
 * https://enlear.academy/how-to-implement-lazy-loading-in-angular-c3f445a2f379
*/

const routes: Routes = [
  { path: "", component: NothingComponent },
  { path: "products", component: ProductsComponent },
  { path: 'store', component: StoreComponent },
  { 
    path: 'login', 
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NothingComponent } from './pages/nothing/nothing.component';
import { ProductsComponent } from './pages/products/products.component';
import { StoreComponent } from './pages/store/store.component';

const routes: Routes = [
  { path: "", component: NothingComponent },
  { path: "products", component: ProductsComponent },
  { path: 'store', component: StoreComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

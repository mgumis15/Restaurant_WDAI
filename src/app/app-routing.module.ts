import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard'
import { AppComponent } from './app.component'
import { LoginPageComponent } from './components/login-page/login-page.component'
import { MenuComponent } from './components/menu/menu.component'
import { DishComponent } from './components/dish/dish.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { RegistrationPageComponent } from './components/registration-page/registration-page.component'

const routes: Routes = [

  { path: 'menu', component: MenuComponent, title: "Menu" },
  { path: 'dish/:id', component: DishComponent, title: "Dish" },
  { path: 'login', title: "Login", component: LoginPageComponent },
  { path: 'registration', title: "Register", component: RegistrationPageComponent },
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

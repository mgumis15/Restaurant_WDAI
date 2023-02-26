import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard'
import { AppComponent } from './app.component'
import { LoginPageComponent } from './components/login-page/login-page.component'
import { DishesComponent } from './components/dishes/dishes.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { RegistrationPageComponent } from './components/registration-page/registration-page.component'

const routes: Routes = [

  { path: 'Menu', component: DishesComponent },
  { path: 'Login', component: LoginPageComponent },
  { path: 'Registration', component: RegistrationPageComponent },
  { path: '', redirectTo: '/Menu', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

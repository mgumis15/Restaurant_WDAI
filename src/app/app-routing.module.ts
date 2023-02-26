import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard'
import { AppComponent } from './app.component'

const routes: Routes = [

  { path: '/Menu', component: AppComponent },
  { path: '', redirectTo: '/Menu', pathMatch: 'full' }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MenuComponent } from './components/menu/menu.component'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { environment } from '../environments/environment'
import { provideAuth, getAuth } from '@angular/fire/auth'
import { provideFirestore, getFirestore } from '@angular/fire/firestore'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatIconModule } from '@angular/material/icon'
import { NavbarComponent } from './components/navbar/navbar.component'
import { DishLiComponent } from './components/dish-li/dish-li.component'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { SETTINGS as AUTH_SETTINGS, PERSISTENCE } from '@angular/fire/compat/auth'
import { LoginPageComponent } from './components/login-page/login-page.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { RegistrationPageComponent } from './components/registration-page/registration-page.component'
import { AuthService } from './services/auth.service'
import { ReactiveFormsModule } from '@angular/forms'
import { VerifyEmailPageComponent } from './components/verify-email-page/verify-email-page.component'
import { DishComponent } from './components/dish/dish.component'
import { OwnCurrencyPipePipe } from './pipes/own-currency-pipe.pipe'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,
    DishLiComponent,
    LoginPageComponent,
    PageNotFoundComponent,
    RegistrationPageComponent,
    VerifyEmailPageComponent,
    DishComponent,
    OwnCurrencyPipePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: true } },
    { provide: PERSISTENCE, useValue: 'session' },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

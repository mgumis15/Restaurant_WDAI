import { Component } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'
import { FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {


  loginForm = this.fb.group({
    email: ['adminWDAI@wdaiAGH.pl', Validators.compose([Validators.required, Validators.email])],
    password: ['50%AghWdai', Validators.required]
  })
  constructor(
    public authService: AuthService,
    private fb: FormBuilder
  ) { }

  onSubmit() {
    if (!this.loginForm.invalid && this.loginForm.value.email && this.loginForm.value.password)
      this.authService.logIn(this.loginForm.value.email, this.loginForm.value.password)
  }
}

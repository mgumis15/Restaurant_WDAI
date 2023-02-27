import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {
  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    confirmPassword: ['', Validators.required]
  }, {
    validators: [this.matchingPasswordsValidator]
  })
  constructor(
    public authService: AuthService,
    private fb: FormBuilder
  ) { }

  validate(): boolean {
    // if (this.loginForm.value.email
    return true
  }
  onSubmit() {
    // if (this.validate())
    //   this.authService.logIn(this.loginForm.value.email, this.loginForm.value.email)
    console.log(this.registerForm.value)
  }
  matchingPasswordsValidator(form: FormGroup) {
    console.log(form)
    if (form.value.password && form.value.confirmPassword) {
      if (form.value.password !== form.value.confirmPassword) {
        return { passNotMatch: true }
      }
    }
    return null
  }

}


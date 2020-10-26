import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@core/service/auth.service';

@Component({
  selector: 'app-auth-sign-in',
  templateUrl: './auth-sign-in.component.html',
  styleUrls: ['./auth-sign-in.component.less']
})
export class AuthSignInComponent implements OnInit {
	public form: FormGroup;

  constructor(
  	private fb: FormBuilder,
  	private authService: AuthService
  ) {
  	this.initiateForm();
  }

  ngOnInit() {
  }

  initiateForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      authKey: ['']
    });

    this.initiateValidator();
  }

  initiateValidator(): void {
    this.form.statusChanges.subscribe(changes => {
      // this.formErrors = FormErrorParser.basic(this.formErrors, this.form, 'en', []);
    });
  }

  validateFormBeforeSubmit(): void{
    // this.formErrors = FormErrorParser.basic(this.formErrors, this.form, 'en', [], true);
  }

  prepareFields(): void {
    this.validateFormBeforeSubmit();
    if (this.form.valid) {
      this.signIn();
    }
  }

  signIn(): void {
      this.authService.signIn(this.form.value).subscribe(
        user => {
          
        }, 
        err => {
          
        }
      );
  }

}

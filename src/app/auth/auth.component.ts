import {Component, OnDestroy, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {User} from "./user.model";
import {Observable, Subscription} from "rxjs";
import {IAuthResponse} from "./auth.types";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit, OnDestroy {
  public isLoginMode = true;
  public isLoading = false;
  public error: string = null;
  public user: User;
  private userSub: Subscription;

  constructor(private authService: AuthService, private router: Router) {
  }
  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user)=> this.user = user);
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){
    if (!form.valid) return;
    const {email, password} = form.value;
    let authObs: Observable<IAuthResponse>;
    this.isLoading = true;
    if (this.isLoginMode) {
     authObs = this.authService.signIn(email, password);
    } else {
     authObs = this.authService.signUp(email, password);
    }
    authObs.subscribe({
      next: (value) => {
      this.router.navigate(['/recipes'])
        this.isLoading = false;
      },
      error: (errorResponse) => {
        console.log(errorResponse);
        this.isLoading = false;
        this.error = errorResponse;
      },
      complete: () => {
        console.log('completed');
        this.isLoading = false;
      }
    })
    form.reset();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
  onCloseClicked(){
    this.error = null;
  }
}

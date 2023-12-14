import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { MessageService } from 'primeng/api';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent  implements DoCheck, OnChanges,OnInit {

  showForgotPassword:boolean=false;
  isenteringotp:boolean=false;
  changepassword:boolean=false;


  constructor(private commonservice : CommonService,
    private router:Router,
    private _snackBar: MatSnackBar,
    private formBuild:FormBuilder,
    private service:UserService,
    private messageService: MessageService) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{ duration: 3000});
  }
  resetForm=this.formBuild.group({
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    confirmpassword:new FormControl('',[Validators.required,Validators.minLength(6)])
   })

  loginForm=this.formBuild.group({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])
   })

   forgotpasswordForm=this.formBuild.group({
    email:new FormControl('',[Validators.required,Validators.email])
   })


   registerForm=this.formBuild.group({
    first_name:new FormControl('',[Validators.required]),
    last_name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')]),
    phone_number:new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
    role:new FormControl('user'),
    status:new FormControl('active'),
   })

   get first_name(){
    return this.registerForm.get('first_name')
   }

   get last_name(){
    return this.registerForm.get('last_name')
   }
   get email(){
    return this.registerForm.get('email')
   }

   get password(){
    return this.registerForm.get('password')
   }

   get phone_number(){
    return this.registerForm.get('phone_number')
   }
   showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Credentials' });
   }
   get confirmpassword(){
    return this.resetForm.get('confirmpassword')
   }


   getcurrentuser(){
    let token= localStorage.getItem("token")
    let user=localStorage.getItem("user")
    if(token!=null&& user!=null){
      return user;
      // console.log(atob(tok));
      // console.log(JSON.parse(atob(user)));
    }
  else return "";
   }


getrole(){
  let role=localStorage.getItem("role")
  if(role!=null)return role;
  else return "";
}
islogedin(){
 if(this.getcurrentuser()!=""){
   return true;
 }
 else return false;
}

   onLogin(){
    console.log(this.loginForm.value)
    this.loginForm.value.password=btoa(this.loginForm.value.password)

    this.service.loginUser(this.loginForm.value).subscribe(
      (data:any)=>{
        localStorage.setItem("token",btoa(data.jwt))
        localStorage.setItem("user",btoa(JSON.stringify(data.user)))
        localStorage.setItem("role",data.user.role)
        if(data.user.role=="admin"){
          this.router.navigateByUrl("admin")
          this.openSnackBar("log in as admin","OK")
        }
        else if(data.user.role=="user"){
          this.router.navigateByUrl("home")
          this.openSnackBar("WELCOME BACK "+data.user.first_name.toUpperCase(),'OK',)
        }

      },
      (error)=>{
        this.showError()
      }
    )
   }

   showSuccess(){
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Password Reset Successful' });
   }
   reset(){
    console.log(this.resetForm.value)
    this.resetForm.value.password= btoa(this.resetForm.value.password)
    let email= localStorage.getItem("email") || ""
    this.service.newpassword(this.resetForm.value,email+"").subscribe(
      (data:any)=>{
        console.log(data);
        this.proceedtoResetpage=false;
        this.isotpcorrectcolour=false;
        this.showForgotPassword=false;
        this.showSuccess()
        this.isenteringotp=false;
        this.changepassword=false;
        this.isotpcorrect=false;
      })
      this.proceedtoResetpage=false;
      this.isotpcorrectcolour=false;
      this.showForgotPassword=false;
      this.isenteringotp=false;
      this.changepassword=false;
      this.isotpcorrect=false;
      console.log(this.proceedtoResetpage)
  }

  proceedToSignUpPage: boolean = false;

   onRegister(){
    console.log("register")
    console.log(this.registerForm.value);
    this.registerForm.value.password=btoa(this.registerForm.value.password)
    this.service.registerUser(this.registerForm.value).subscribe(
      data=>{
              console.log(data)
    this.messageService.add({ severity: 'success', summary: 'Success', detail: data.email+' Register Successful' });
    setTimeout(() => {
    this.proceedToSignUpPage=true;
    this.router.navigate(['login']) . then(() => { window. location. reload(); });
  },2000);
},error=>{
console.log(error)
this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Duplicate Email' })

  }
    )
   }
   hidePassword: boolean = true;

  togglePasswordVisibility(): void {
  this.hidePassword = !this.hidePassword;
}

deleteUser(user_id:number){
  this.service.deleteuser(user_id)
  this.gettingAllUsers
}
gettingAllUsers(){
  this.service.gettingallUsers();
}
gettingAllEmails(){
  this.service.getallemails();
}

forgotpassword(){
  this.showForgotPassword=true;
  console.log(this.showForgotPassword)
}

onSubmitForgotPassword(){
  this.isenteringotp=true
 localStorage.setItem('email',btoa(this.forgotpasswordForm.value.email))
 console.log(this.forgotpasswordForm.value.email)
 if(this.forgotpasswordForm.value.email!=null){
  this.sendemailForgotPassword(this.forgotpasswordForm.value)
 }
 }

sendemailForgotPassword(email:any){
  this.startTimer(); // start timer for verify otp
  this.service.forgotpassword(email).subscribe(data=>{
  this.currentotp=(Number(data.Secretkey)-12345)+""

   })
}

currentotp:string=""
first:string=""
second:string=""
third:string=""
fourth:string=""
isotpcorrect:boolean=false
proceedtoResetpage:boolean=false

remainingTime: number = 60;
  timerId: any;

ngOnInit() {
}

resetFields() {
  this.first = '';
  this.second = '';
  this.third = '';
  this.fourth = '';
}
resendotp() {
  this.resetFields();
  this.remainingTime = 60;
  let email=localStorage.getItem('email')
  if(email!=null){
 this.sendemailForgotPassword({"email":atob(email)+""})
  }
  this.borderColor='blue'
}

startTimer() {
    this.timerId = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime === 0) {
        this.timerExpired();
        this.stopTimer();
      }
    }, 1000);
}

timerExpired() {
    console.log('Timer expired!');
}

stopTimer() {
    clearInterval(this.timerId);
}

ngOnChanges(changes: SimpleChanges) {
}

ngDoCheck() {

  if(this.first!=''&& this.second!=''&& this.third!=''&& this.fourth!=''
||this.first!=undefined&& this.second!=undefined&& this.third!=undefined&& this.fourth!=undefined
||this.first!=' '&& this.second!=' '&& this.third!=' '&& this.fourth!=' '){

if(this.currentotp!=""){

 let otpentered=this.first+""+this.second+""+this.third+""+this.fourth

  if (otpentered==this.currentotp) {
   this. isotpcorrectcolour=true;
   this.getDynamicStyles();
    setTimeout(() => {
      this.proceedtoResetpage=true;

    }, 1000);

  } else {
    if(otpentered.trim().length<4){
      return
    }
    this.isotpcorrect = false;
    this.getDynamicStyles();
  }
}
}
}
isotpcorrectcolour:boolean=false
borderColor:string='blue';
getDynamicStyles() {
  if(this.isotpcorrectcolour) {
        this.borderColor='green'
  }else{
    this.borderColor='red'
  }
}
resetit(){
  this.registerForm.reset(this.registerForm.value);
  this.registerForm.reset()
  console.log("destroy called");
}

}

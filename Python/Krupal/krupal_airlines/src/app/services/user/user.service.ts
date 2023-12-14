import { Reset, otp } from './../../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { USERSERVICE_API_PATH } from 'src/app/constants/IMPData';
import { Login, User } from 'src/app/model/user.model';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(user:User):Observable<User>{
   return this.http.post<User>(`${USERSERVICE_API_PATH}register/`,user)
  }

  loginUser(login:Login):Observable<Login>{
    return this.http.post<Login>(`${USERSERVICE_API_PATH}login/`,login)
  }

  getallemails():Observable<string[]>{
    return this.http.get<string[]>(`${USERSERVICE_API_PATH}getallemails/`)
  }

  getbyid(user_id:number):Observable<User>{
    return this.http.get<User>(`${USERSERVICE_API_PATH}getbyid/${user_id}`)
  }

  deleteuser(user_id:number):Observable<User>{
    return this.http.get<User>(`${USERSERVICE_API_PATH}deleteuser/${user_id}`)
  }

  updateuser(user_id:number):Observable<User>{
    return this.http.get<User>(`${USERSERVICE_API_PATH}updateuser/${user_id}`)
  }

  gettingallUsers():Observable<User[]>{
    return this.http.get<User[]>(`${USERSERVICE_API_PATH}gettingallusers/`)
  }

  forgotpassword(email:string):Observable<otp>{
    return this.http.post<otp>(`${USERSERVICE_API_PATH}forgotpassword/`,email)
  }

  resetpassword(reset:Reset, user_id:number):Observable<Reset>{
       return this.http.put<Reset>(`${USERSERVICE_API_PATH}changepassword/${user_id}`,reset)
  }

  newpassword(password:string,email:string):Observable<string>{
    email=atob(email)
    return this.http.put<string>(`${USERSERVICE_API_PATH}newpassword/${email}`,password)
  }
}


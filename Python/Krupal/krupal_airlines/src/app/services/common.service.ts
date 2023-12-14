import { Injectable } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

getcurrentuser(){
    let user=localStorage.getItem("user")
    if(user!=null){
      return JSON.parse(atob(user));
    }
   else return "";
   }


getrole(){
  let role=localStorage.getItem("role")
  if(role!=null)return role;
   else return "";
}

isloggedin(){
 if(this.getcurrentuser()!=""){
   return true;
 }
  else return false;
}

getToken(){
  let token= localStorage.getItem("token")
  if(token!=null){
    return atob(token);
  }
   else return "";
}
}

 // constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

  // confirm(message: string, acceptCallback: () => void, rejectCallback: () => void) {
  //   this.confirmationService.confirm({
  //     message: message,
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: acceptCallback,
  //     reject: rejectCallback
  //   });
  // }


  // showMessage(severity: string, summary: string, detail: string) {
  //   this.messageService.add({ severity: severity, summary: summary, detail: detail });
  // }

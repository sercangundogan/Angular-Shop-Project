import { Injectable } from '@angular/core';
import { User } from '../login/user';
import { AlertifyService } from './alertify.service';

@Injectable()
export class AccountService {

  constructor(private alertifyService: AlertifyService) { }

  loggedIn:boolean = false


  login(user: User):boolean{
    if(user.userName =="sercan" && user.password == "12345"){
      this.loggedIn = true
      localStorage.setItem("isLogged", user.userName);
      this.alertifyService.success("Başarıyla giriş yaptınız.")
      return true
    }
    this.alertifyService.error("Giriş yapılamadı, lütfen kullanıcı adı ve şifrenizi girip tekrar deneyiniz.")
    return false
  }
  
  isLoggedIn(){
    return this.loggedIn
  }

  logOut(){
    localStorage.removeItem("isLogged");
    this.loggedIn = false
  }

}



import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import {AlertController} from "@ionic/angular" ;
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
username :string ="";
password : string="";
cpassword :string="";
  constructor(public afAuth:AngularFireAuth,
    public alertCont:AlertController) { }

  ngOnInit() {
  }
  async register(){
  const{username,password,cpassword}=this
  if(password!=cpassword)
  {
    this.showAlert("Error","Passwords don't match");
    console.error("passwords don't match");
    return 0;
  
}
try{
const res=await this.afAuth.auth.createUserWithEmailAndPassword(username+"@socialm.com",password);
console.log(res);
}
catch(error){
console.dir(error);
}
}
async showAlert(header:string, message:string){
  console.log("enter show alert");
const alert=await this.alertCont.create(
{
  header,message,buttons:["ok"]
});
console.log("after create alert call");
await alert.present();
 console.log("after await alert test preesence");
}
}

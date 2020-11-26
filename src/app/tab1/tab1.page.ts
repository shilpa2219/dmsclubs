import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  user:any[]=[]
  mobile:number
  password:string
  code:number
  accept:string

  constructor(public navCtrl:NavController) {}
  register(){
    console.log("Mobile Number : ",this.mobile);
    console.log("Password : ",this.password);
    console.log("Recommendation Code : ",this.code);
    console.log("Privacy Policy : ",this.accept);

    }
    
    
    
    

  }
  

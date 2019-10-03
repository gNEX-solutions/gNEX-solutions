import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})

export class FooterComponentComponent implements OnInit {

  name: string;
  email: string;
  message: string;
  phone:string;
  error:string;

  constructor(private  httpClient:HttpClient) { }

  ngOnInit() {
  }

  sendMail() {

    let respons ;  

    // alert('Your name is'+ this.name);
    if(this.name == undefined){
       this.error = "please fill the fields with *";
      } 
    else if(this.email == undefined){
        this.error = "please fill the fields with *";
      } 
    else if(this.message == undefined){
       this.error = "please fill the fields with *";
      } 
    else{

      this.error = "";

      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    const  params = new  HttpHeaders().set('name', this.name).set('email',this.email).set('message',this.message).set('phone', this.phone);
    this.httpClient.post("http://gnexsolutions.com/mail_sender.php",{"name":this.name,"email":this.email,"message":this.message,"phone":this.phone},httpOptions).subscribe((data) => {
    alert(JSON.stringify(data));
  });
    }
}

}

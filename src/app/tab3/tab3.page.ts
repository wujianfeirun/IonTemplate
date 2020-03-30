import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  constructor(public http: HttpClient) {}

  private getRecords(request:string){
    const httpOptions={
      headers:new HttpHeaders({
        'Content-type': 'application/json',    //返回字符串
      })
    };

    const url = 'http://localhost:8080/ion/'+request;
    this.http.get(url,httpOptions).subscribe((res:Response) => {
        console.log(res);
    });
  }

  private postRecords(){
    const httpOptions={
      headers:new HttpHeaders({
        'Content-type': 'application/json',    //返回字符串
      })
    };
    const jsonBody = JSON.stringify(
      {
      "name": "www",
      "age": "12",
      "gender": "男",
      }
    );
    
    const url = 'http://localhost:8080/ion/post';
    this.http.post(url,jsonBody,httpOptions).subscribe((res:Response) => {
        console.log(res);
    });
  }

}

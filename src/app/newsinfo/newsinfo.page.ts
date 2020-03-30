import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newsinfo',
  templateUrl: './newsinfo.page.html',
  styleUrls: ['./newsinfo.page.scss'],
})
export class NewsinfoPage implements OnInit {

  constructor(public router: Router,
    public nav: NavController,
    public route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((data)=> {
      console.log("queryParams传参"+data.name);
      console.log("queryParams传参"+data.id);
      console.log("queryParams传参"+data.department);
    });
  }

  navBack(){
    this.nav.pop(); // 返回到上一个页面
    // this.nav.back(); // 同上
    // this.nav.navigateBack('/'); // 可以指定返回的页面路径
  }

  routeBack(){
    this.router.navigateByUrl('/tabs/news');   //没有pop  back这样的方法
  }

}

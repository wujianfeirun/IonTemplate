import { Component } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  //通过构造函数传入服务
  constructor(public photoService:PhotoService ) {}

  //初始化页面
  ngOnInit(): void {
    this.photoService.loadSaved();
  }
  
}

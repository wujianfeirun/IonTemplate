import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public listText=["第一","第二","第三","第四"];
  public listObj=[
    {
      photo:'1.png',
      title:'My Neighbor Totoro',
      detail:'Hayao Miyazaki • 1988'
    },
    {
      photo:'2.png',
      title:'My Neighbor Totoro',
      detail:'Hayao Miyazaki • 1988'
    },
    {
      photo:'3.png',
      title:'My Neighbor Totoro',
      detail:'Hayao Miyazaki • 1988'
    },
  ]

  public listDivided=[
    {
      cate:'国产',
      list:[
        {'title':'比亚迪'},
        {'title':'长城'},
        {'title':'力帆'}
      ]
    },
    {
      cate:'宝马',
      list:[
        {'title':'宝马x1'},
        {'title':'宝马x3'},
        {'title':'宝马x5'},
      ]
    }
  ]

  constructor() {}

}

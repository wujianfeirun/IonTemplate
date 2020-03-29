import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ActionSheetController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  public obj={
    name:"wu",
    id:"12345",
    department:"tech"
  }
  
  ngOnInit() {
  }

  constructor(private router: Router,
    public alertController:AlertController,
    public loadingController:LoadingController,
    public actionSheetController: ActionSheetController,
    public toastController: ToastController ) {}

  //弹出框    输i-alert提示输出 
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '提示信息',
      subHeader: '恭喜',
      message: '恭喜操作成功',
      buttons: ['确认']
    });
    await alert.present();
  }

  //弹出确认   输i-alert-confirm提示输出
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: '请确认',
      message: '是不是 <strong>继续执行</strong>!',
      buttons: [
        {
          text: '确认',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('弹出框选确认');
          }
        }, 
        {
          text: '取消',
          handler: () => {
            console.log('弹出框选取消');
          }
        }
      ]
    });
    await alert.present();
  }

 //加载中   输i-loading提示输出
 async presentLoading() {
   const loading = await this.loadingController.create({
     message: '加载中',
     //duration: 2000,
     spinner: 'bubbles'
   });
   await loading.present();

   setTimeout(() => {
    loading.dismiss();
   }, 2000);

 } 

  //上拉菜单   输i-action-sheet提示输出
 async presentActionSheet() {
   const actionSheet = await this.actionSheetController.create({
     header: '请操作',
     cssClass:'actionSheet',    //必须写在app.css中，不然无效
     buttons: [{
       role: 'destructive',
       icon: 'trash',
       text: '删除',
       handler: () => {
         console.log('点击了删除');
       }
     }, {
       text: '共享',
       icon: 'share',
       handler: () => {
         console.log('点击了共享');
       }
     }, {
       text: '取消',
       icon: 'close',
       role: 'cancel',
       handler: () => {
         console.log('点击了取消');
       }
     }]
   });
   await actionSheet.present();
 }

 //toast 提示信息  i-toast
 async presentToast() {
   const toast = await this.toastController.create({
     message: '你的设置已经保存好了',
     duration: 2000
   });
   toast.present();
 }

 //toast 带选项的提示信息   注意：i-toast-option以及i-toast-button提示输出都是错的
 async presentToastWithOptions() {
  const toast = await this.toastController.create({
    header: 'Toast header',
    message: 'Click to Close',
    position: 'bottom',
    buttons: [
      {
        side: 'start',
        icon: 'star',
        text: '选择一',
        handler: () => {
          console.log('选择一 clicked');
        }
      }, {
        text: '选择二',
        role: 'cancel',
        handler: () => {
          console.log('选择二 clicked');
        }
      }
    ]
  });
  toast.present();
}

  //在ts中进行页面跳转
  navigate(){
    this.router.navigate(['/detail'])
  }
}

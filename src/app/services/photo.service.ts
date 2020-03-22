import { Injectable } from '@angular/core';
import { Plugins,CameraResultType,Capacitor,FilesystemDirectory,
          CameraPhoto,CameraSource} from '@capacitor/core';
import { Platform } from '@ionic/angular';
const { Camera, Filesystem, Storage} = Plugins;



@Injectable({
  providedIn: 'root'
})

export class PhotoService {

 
  constructor(platform: Platform) { 
    this.platform=platform;
  }

  private platform:Platform;

  public photos: Photo[] = [];

  private PHOTO_STORAGE: string = "photos";

  // TODO 服务中添加拍照方法
  public async addNewToGallery(){
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Camera, 
      quality: 100 
    });

    const savedImageFile = await this.savePicture(capturedPhoto);
    //TODO 数组的unshift遍历,每执行一次，从前压入元素
    this.photos.unshift(savedImageFile);

    //web存储为base
    Storage.set({
      key: this.PHOTO_STORAGE,
      value: this.platform.is('hybrid')
             ? JSON.stringify(this.photos):
             JSON.stringify(this.photos.map(p => {
              // Don't save the base64 representation of the photo data, 
              // since it's already saved on the Filesystem
              const photoCopy = { ...p };
              delete photoCopy.base64;
    
              return photoCopy;
              }))
    });
  }

  //加载照片的方法
  public async loadSaved() {
    // 从缓存中取出照片数据
    const photos = await Storage.get({ key: this.PHOTO_STORAGE });
    this.photos = JSON.parse(photos.value) || [];

    //数据转换成base64格式，只有在web下需要，app中不需要
    if (!this.platform.is('hybrid')) {
      for (let photo of this.photos) {
        //文件路径取出照片数据
        const readFile = await Filesystem.readFile({
            path: photo.filepath,
            directory: FilesystemDirectory.Data
        });
        //转成base64
        photo.base64 = `data:image/jpeg;base64,${readFile.data}`;
      }
    }
  }


  //保存照片方法
  private async savePicture(cameraPhoto: CameraPhoto) { 
      // Convert photo to base64 format, required by Filesystem API to save
      
      const base64Data = await this.readAsBase64(cameraPhoto);

      // Write the file to the data directory
      const fileName = new Date().getTime() + '.jpeg';
      await Filesystem.writeFile({
        path: fileName,
        data: base64Data,
        directory: FilesystemDirectory.Data
      });

      // Get platform-specific photo filepaths
      return await this.getPhotoFile(cameraPhoto, fileName);
  }

  private async getPhotoFile(cameraPhoto: CameraPhoto, fileName: string): Promise<Photo> {
    if (this.platform.is('hybrid')) {
      //app使用Capacitor取文件路径
      const fileUri = await Filesystem.getUri({
        directory: FilesystemDirectory.Data,
        path: fileName
      });
      return {
        filepath: fileUri.uri,
        webviewPath: Capacitor.convertFileSrc(fileUri.uri),
      };
    }
    else {
      //web取文件路径
      return {
        filepath: fileName,
        webviewPath: cameraPhoto.webPath
      };
    }
  }

  private async readAsBase64(cameraPhoto: CameraPhoto) {
    if (this.platform.is('hybrid')) {
      //app直接保存成文件
      const file = await Filesystem.readFile({
        path: cameraPhoto.path
      });
  
      return file.data;
    }
    else {
      //web需转换成base64
      const response = await fetch(cameraPhoto.webPath);
      const blob = await response.blob();
  
      return await this.convertBlobToBase64(blob) as string;  
    }
  }
  
  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
}

interface Photo{
  filepath: string;
  webviewPath: string;
  base64?: string;
}

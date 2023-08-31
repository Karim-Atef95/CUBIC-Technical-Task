import { Component, OnInit } from '@angular/core';
import { RetrieveMerchantCategoriesService } from '../services/retrieve-merchant-categories.service';
import { TranslateService } from '@ngx-translate/core';
import { NgxFileDropEntry } from 'ngx-file-drop';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  constructor(private service : RetrieveMerchantCategoriesService,public translate:TranslateService) {
    translate.setDefaultLang('en');
  }
  merchantsData:any;
  engtext:any;
  files:NgxFileDropEntry[]=[];
  selectedFile:any;
  url:any;
  
  fetchData(){
    this.service.getData().subscribe(
      (Response)=>{
        this.merchantsData = (Response);
      }
    )
  }
  Clicked(){
    this.engtext = !this.engtext;
  }
  Trans(){
    if(this.engtext){
      this.translate.use('ar');
    } else{
      this.translate.use('en');
    }
  }
  public Dropped(files:NgxFileDropEntry[]){
    this.files=files;
    console.log(this.files);
  }
  onFileSelected(e:any){
      if(e.target.files){
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload= (event:any)=>{
          this.url=event.target.result;
        }
      }
  }
  // onFileSelected(event:any){
  //   this.selectedFile=event.target.files[0];
  //   console.log(event);
  // }

  
  ngOnInit(){
    this.fetchData();
    }

}

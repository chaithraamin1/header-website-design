import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website-header-design';
  ngOnInit(){
      var navList:any=document.getElementById("nav-list");
      navList.style.maxHeight="0px";
  }
  toggleMenu(){
    var navList:any=document.getElementById("nav-list");
    if( navList.style.maxHeight=="0px"){
      navList.style.maxHeight="300px";
    }
    else{
      navList.style.maxHeight="0px";
    }
  }
}

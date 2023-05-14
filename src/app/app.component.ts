import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform:Platform,
    public router:Router,
  ) {

    this.platform.ready().then(()=>{
      setTimeout(() => {
        this.router.navigateByUrl('test');
      }, 1800);
    })
  
  }

  
}

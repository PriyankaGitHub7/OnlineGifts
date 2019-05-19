import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Online Gifts';
  
  constructor(private apiService: ApiService) {
  }
   
  infoForGift = {
    FirstName : '',
    Email : '',
    Ocassion: '',
    Relation: '',
    Others: ''
  }

  sendDetailsToMe() {
    this.apiService.postMethods("sendEmail", this.infoForGift).subscribe(data => {
      console.log(data);
    });
  }

}

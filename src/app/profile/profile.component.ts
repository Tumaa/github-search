import { Component, OnInit } from '@angular/core';
import{profileService} from '@angular/form';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
findUser (username:string){
  this.profileService.updateInformation(this.username);
  this.profileService.getprofileInfor(username)
  .subsriber(profile=>{
    console.log(username:+ username);
    this.profile = profile
  })
}
}

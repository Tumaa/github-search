import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repos  } from 'src/app/repos';


@Injectable()
export class ProfileService {
 private username: string;
 private inform = 'c7388d45e8e8b3b9f959d76d178dcdba76e07622';
 private repos: string;
 constructor(private tuma: HttpClient) {
   console.log('AM OK DEAR');
   this.username = 'tumaa';
 }

//  getprofileInfo(username) {
//    return this.tuma.get('https://api.github.com/users/' + username + '?access_token=' + this.inform);
//  }

//  getprofileRepos(username) {
//    return this.tuma.get('https://api.github.com/users/' + username + '/repos' + '?access_token=' + this.inform);
//  }
 
//  updateInformation(username: string) {
//    this.username = username;
//  }
// }
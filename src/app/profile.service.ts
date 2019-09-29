import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private  username:string;
private inform = "c7388d45e8e8b3b9f959d76d178dcdba76e07622";
private repos: string;

  constructor(private tuma:HttpClient) {
  console.log ("hello");
  this.username = "tumaa";
  
   }
}

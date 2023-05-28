import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WheatherService {

  constructor(public http:HttpClient) { }

  getdata(city:string, units:string){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=7588fb1bf073867c55cb6c8c287d3fc2&units='+units)
  }
  getdatacity(city:string,data:any){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=7588fb1bf073867c55cb6c8c287d3fc2&units=imperial',data)
  }
  
}

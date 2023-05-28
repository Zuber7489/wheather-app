import { Component } from '@angular/core';
import { WheatherService } from './wheather.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 data:any;
city:string='Burhanpur';
units:string='imperial';
currentDate: any;
  constructor(public whether:WheatherService) { }

  wheatherForm=new FormGroup({
    location:new FormControl('')
  })

  ngOnInit(){
this.getWeatherData(this.city);
this.getCurrentDate();
  }

getCurrentDate(){
  const date = new Date();
  this.currentDate = date.toLocaleString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    
    hour12: true
  });
}
  
  
  celsius:any;
  getWeatherData(city: string) {
    this.whether.getdatacity(city, this.units).subscribe(res => {
      this.data = res;
      this.celsius = ((this.data.main.temp - 32) * 5/9).toFixed(2);
      console.log(this.data);
    });
  }

  submit() {
    const location = this.wheatherForm.get('location')?.value;
    if (location) {
      this.getWeatherData(location);
    }
  }

}

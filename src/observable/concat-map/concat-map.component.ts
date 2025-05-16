import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, from, map, toArray } from 'rxjs';

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}


@Component({
  selector: 'app-concat-map',
  imports: [],
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.css'
})
export class ConcatMapComponent {

  constructor(
    private http: HttpClient
  ){

  }

  ngOnInit(){
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(
      concatMap(data => from(data)),
      map(data => ({
        id: data.id,
        name: data.name
      })),
      toArray()
    )
    .subscribe({
      next: data => {
        console.log(data);
      }
    })
  }
}

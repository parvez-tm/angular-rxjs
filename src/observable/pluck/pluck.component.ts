import { Component } from '@angular/core';
import { from, map } from 'rxjs';

@Component({
  selector: 'app-pluck',
  imports: [],
  templateUrl: './pluck.component.html',
  styleUrl: './pluck.component.css'
})
export class PluckComponent {

  users = from([
    { name:'PTM', age: '23'},
    { name:'Shin', age: '21'},
  ])
  constructor(){
    this.users.pipe(
      map(data => data.name)
    ).subscribe({
      next: (data) => {
        console.log(data)
      }
    })
  }
}


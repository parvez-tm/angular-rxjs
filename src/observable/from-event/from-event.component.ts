import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  imports: [],
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.css'
})
export class FromEventComponent {

  @ViewChild('btn') btn!:ElementRef

  ngAfterViewInit(){
    let count = 1
    fromEvent(this.btn.nativeElement,'click').subscribe(res => {
      let video = `Video ${count++}`
      this.print(video)
      
    })
  }

  print(item:string){
    let ul = document.getElementById('elContainer')

    let li = document.createElement('li')
    li.innerHTML = item

    ul?.appendChild(li)
  }
}

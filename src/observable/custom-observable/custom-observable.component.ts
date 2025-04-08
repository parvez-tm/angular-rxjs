import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-custom-observable",
  imports: [CommonModule],
  templateUrl: "./custom-observable.component.html",
  styleUrl: "./custom-observable.component.css",
})
export class CustomObservableComponent {
  array = signal<any[]>([]);
  constructor() {}

  taskCompleted!: string;
  ngOnInit() {
    // Mannual
    const observable = new Observable((observer) => {

      setTimeout(() => {
        observer.next("Data emit 1");
      }, 1000);

      setTimeout(() => {
        observer.next("Data emit 2");
      }, 2000);

      setTimeout(() => {
        observer.next("Data emit 3");
        observer.error("Data emit " + 3); //If want error in between stream of data
      }, 3000);

      setTimeout(() => {
        observer.next("Data emit 4");
      }, 4000);

      setTimeout(() => {
        observer.next("Data emit 5");
        observer.complete()
      }, 5000);
    });


    observable.subscribe({
      next: (data) =>{
        this.array.update((d) => {
          return [...d, data];
        });
      },
      error: (err) => {
        console.log(err);
        this.taskCompleted = "error";
      },
      complete: () => {
        this.taskCompleted = "complete";
      }
    })
  }
}

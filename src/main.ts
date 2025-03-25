import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { SubjectComponent } from './subject/subject.component';
import { RouterLink, RouterLinkActive, RouterOutlet, provideRouter } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { PremiumService } from './services/premium.service';
import { CommonModule } from '@angular/common';
import { PromiseComponent } from './promise/promise.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { FromOfComponent } from './observable/from-of/from-of.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,CommonModule,RouterLinkActive],
  template: `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"  routerLink='/subject' routerLinkActive='active'>Subject</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink='/observable' routerLinkActive='active'>Observable</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" routerLink='/promise' routerLinkActive='active'>Promise</a>
      </li>

      </ul>
    </div>
    </div>
    </nav>

    <div style="position:fixed; bottom: 0; right: 0" class="m-2">
    <span class="badge text-bg-warning p-2" *ngIf='this.premium.exclusive()'>Premium</span>
    <!--<span class="badge text-bg-warning" *ngIf='exclusive'>Premium</span>-->
    </div>

<router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
  exclusive = this.premium.exclusive()

  constructor(public premium: PremiumService){
    // this.premium.exclusive.subscribe(res => {
    //   this.exclusive = res
    // })
    
  }
}

bootstrapApplication(App,{
  providers: [
    provideRouter([
      {
        path: '',
        redirectTo: 'subject',
        pathMatch: 'full'
      },
      {
        path: 'subject',
        component: SubjectComponent
      },
      {
        path: 'observable',
        component: ObservableComponent,
        children: [
          {
            path: 'fromEvent',
            component: FromEventComponent
          },
          {
            path: 'interval',
            component: IntervalComponent
          },
          {
            path: 'from-of',
            component: FromOfComponent
          }
        ]
      },
      {
        path: 'promise',
        component: PromiseComponent
      },
    ])
  ]
});

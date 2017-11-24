import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, query } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'absolute',
            left:0,
            right:0,
            transform: 'scale(0)'
          }),
          {optional:true}),
        // move page off screen right on leave
        query(':leave',
          animate('300ms ease-out',
            style({
              position: 'absolute',
              left:0,
              right:0,
              marginLeft:'auto',
              marginRight:'auto',
              transform: 'scale(0)'
            })
          ),
        {optional:true}),
        // move page in screen from left to right
        query(':enter',
          animate('300ms ease',
            style({
              marginLeft: '.75rem',
              marginRight: '.75rem',
              opacity: 1,
              transform: 'scale(1)'
            })
          ),
        {optional:true}),
      ])
    ])
  ]
})
export class AppComponent {
  title = 'simple route app';

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.name
  }
}

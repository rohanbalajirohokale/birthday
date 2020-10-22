import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { timer } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  colors : Array<string> = [

    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red', 
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red', 
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',
    'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red',

  ];

  who : string;

  colorSelected : string = 'red';

  source : Observable<number> = timer(1000, 500);

  constructor(private activatedRoute : ActivatedRoute) {
    this.source.subscribe((val: number) => {
         this.colorSelected = this.colors[val];                    
  });
   this.activatedRoute.queryParams.subscribe((params: Params) => {

    // console.log(params);
    
    if(params['who']) {
        let names : string[] = String(params['who']).split(' '); 
        names.map((name, index, array) => {
          array[index] = name.replace(name.slice(0, 1), name.charAt(0).toUpperCase())
        });
     // console.log('names: ', names.join(' '));
        this.who = names.join(' ');
    } else {
      this.who = 'To You';
    }
  });

  }

}

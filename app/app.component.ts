import { Component } from '@angular/core';
import { ElementsManipulation } from './app.elements.manip';

@Component({
  selector: 'my-app',
  templateUrl: './app/views/regestrationForm.html',
  styles: [`
  body {
    background-color: #eee;
}

*[role="form"] {
    max-width: 530px;
    padding: 15px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 0.3em;
}

*[role="form"] h2 {
    margin-left: 5em;
    margin-bottom: 1em;
}


  `]
})

export class AppComponent extends ElementsManipulation {
}

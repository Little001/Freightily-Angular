import { Component, ViewChild } from '@angular/core';
import { ButtonComponent } from '../modules/button/button';
import { ButtonModel } from '../modules/button/button.model';
import { ButtonType } from '../modules/enums/button';

@Component({
    selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';
  public index = 1;
  public loginButton = new ButtonModel('test', ButtonType.Important, () => {console.log('cliced ' + this.index); });

  click() {
    this.index++;
    this.loginButton.setText('test' + this.index);
    if (this.index % 2 === 0) {
      this.loginButton.setHandler(() => {alert('base'); });
    } else {
      this.loginButton.setHandler(() => {alert('important'); });
    }
  }

  constructor() {
  }
}

import { Component } from '@angular/core';
import { AppConfig } from './config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = AppConfig.appTitle;
}

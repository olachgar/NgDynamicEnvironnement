import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgDynamicEnvironnement';

  constructor(){

    let toto = process.env.ASPNETCORE_ENVIRONMENT
    console.log(toto);
    this.title = this.title + ' (' + toto + ')'
  }
}

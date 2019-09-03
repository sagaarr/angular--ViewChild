import { Component, ViewChild,AfterViewInit } from '@angular/core';
import {HelloComponent} from './hello.component'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'sagar';
   @ViewChild(HelloComponent, {static: false}) hello: HelloComponent;
   @ViewChild('pRef', {static:false})pRef:ElementRef;

  ngAfterViewInit() {
    console.log('Hello ', this.hello.name); 
      this.pRef.nativeElement.innerHTML = "DOM updated successfully!!!";
  }
}

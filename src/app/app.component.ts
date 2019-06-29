import { Component, OnInit } from '@angular/core';

import { ExampleComponent } from './example/example.component';
import { DialogService } from './dialog/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private dialogService: DialogService) {}

  ngOnInit() {
    const ref = this.dialogService.open(ExampleComponent, {
      data: {
        message: 'I am a dynamic component inside of a dialog!'
      }
    });
    ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });
  }
}

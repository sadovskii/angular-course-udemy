import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-way-binding',
  templateUrl: './way-binding.component.html',
  styleUrls: ['./way-binding.component.scss']
})
export class WayBindingComponent implements OnInit {

  title = 'initial';

  constructor() { }

  ngOnInit() {
  }

  onInput(event: any) {
    this.title = event.target.value;
  }

}

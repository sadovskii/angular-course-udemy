import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.scss']
})
export class Post2Component implements OnInit {
  str = '';




  constructor() { }

  ngOnInit() {
  }

  onInput(event: KeyboardEvent) {
    this.str = (<HTMLInputElement>event.target).value;
  }

  onClick(event: any) {
    this.str = 'click'

  }

  onBlur(str: string) {
    this.str = "blur  ." + str;
  }

}

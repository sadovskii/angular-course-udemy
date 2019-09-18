import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post3',
  templateUrl: './post3.component.html',
  styleUrls: ['./post3.component.scss']
})
export class Post3Component implements OnInit {

  title = 'Default title'
  arr = [1, 2, 3]
  obj = { a: 1, b: 2}


  constructor() { }

  ngOnInit() {
  }

}

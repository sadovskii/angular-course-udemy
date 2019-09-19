import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get3',
  templateUrl: './get3.component.html',
  styleUrls: ['./get3.component.scss']
})
export class Get3Component implements OnInit {

  arr = [ 1, 1, 2, 3, 5, 8, 13 ];

  objs = [
    {title: 'Post 1', author: 'Vladilen 1', comments: [
      {name: 'Max', text: 'lorem 1'},
      {name: 'Max', text: 'lorem 2'},
      {name: 'Max', text: 'lorem 3'},
    ]},
    {title: 'Post 2', author: 'Vladilen 2', comments: [
      {name: 'Max', text: 'lorem 1'},
      {name: 'Max', text: 'lorem 2'},
      {name: 'Max', text: 'lorem 3'},
    ]}
  ]
  constructor() { }

  ngOnInit() {
  }

}

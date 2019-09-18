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

  img = 'https://ezerus.com.au/wp-content/uploads/2019/05/1_To2H39eauxaeYxYMtV1afQ.png';

  constructor() { 
    setTimeout(() => {
      console.log("Timeout is over");
      this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png'
    }, 5000)
  }

  ngOnInit() {
  }

}

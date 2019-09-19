import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { GetComponent } from './get/get.component';
import { Post2Component } from './post2/post2.component';
import { Post3Component } from './post3/post3.component';
import { Get2Component } from './get2/get2.component';
import { Get3Component } from './base/get3/get3.component';
import { Post4Component } from './post4/post4.component';
import { WayBindingComponent } from './way-binding/way-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    GetComponent,
    Post2Component,
    Post3Component,
    Get2Component,
    Get3Component,
    Post4Component,
    WayBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

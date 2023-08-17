import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  currentItem: any
  constructor(private data: DataService ){
    console.log(this.data.data);
  }
  ngOnInit(){
    this.currentItem = this.data.data
  }
}

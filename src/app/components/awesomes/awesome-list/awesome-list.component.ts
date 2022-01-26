import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from "rxjs";
import {AwesomeService} from "../../../service/awesome.service";
import {Awesome} from "../../../model/awesome";

@Component({
  selector: 'app-awesome-list',
  templateUrl: './awesome-list.component.html',
  styleUrls: ['./awesome-list.component.css']
})
export class AwesomeListComponent implements OnInit {
  awesomes: Awesome[] = []

  constructor(private awesomeService: AwesomeService) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll() {
    this.awesomeService.getAll().subscribe(res => {
      this.awesomes = res;
    })
  }
  delete(i: any) {
    if(confirm('Are you sure?')){
      const awesome = this.awesomes[i]
      this.awesomeService.delete(awesome.id).subscribe(res => {
        this.awesomes = this.awesomes.filter(
          n=>n.id !==awesome.id
        )
      })
    }
  }

}

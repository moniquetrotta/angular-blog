import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  imgCover:string =""
  @Input()
  title:string = ""
  @Input()
  text:string = ""
  private id:string | null="0" 
  
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
       this.id = value.get("id")
       )
       this.setValuesToComponent(this.id)
  }
  setValuesToComponent(id:String | null){
    const result = dataFake.filter(article => article.id == id)[0]
    this.title = result.title
    this.id = result.id
    this.imgCover = result.imgCover
    this.text = result.text
    }
  }



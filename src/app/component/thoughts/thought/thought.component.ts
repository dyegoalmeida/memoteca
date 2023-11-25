import {Component, Input, OnInit} from '@angular/core';
import {Thought} from "../thought";

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() thought:Thought = {
    id: 1,
    content: 'I love Angular',
    authorship: 'Dyego',
    model: 'modelo3',
    favorite: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  widthThought(): string {
    if(this.thought.content.length >= 256){
      return 'thought-g'
    }
    return 'thought-p'
  }

  changeIconFavorite(): string {
    if (!this.thought.favorite) {
      return 'inativo'
    }
    return 'ativo'
  }

}

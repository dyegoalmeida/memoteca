import {Component, Input, OnInit} from '@angular/core';
import {Thought} from "../thought";
import {ThoughtService} from "../thought.service";

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

  /**
   * Injetamos o service no construtor
   * @param service
   */
  constructor(private service: ThoughtService) { }

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

  updateFavorite(){
    this.service.changeFavorite(this.thought).subscribe();
  }

}

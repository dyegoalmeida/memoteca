import { Component, OnInit } from '@angular/core';
import {Thought} from "../thought";
import {ThoughtService} from "../thought.service";

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {

  listThoughts: Thought[] = [];
  pageCurrent: number = 1;

  constructor(private service: ThoughtService) { }

  /**
   * Faz parte do ciclo de vida do componente, toda lógica que você queira que seja executada assim que
   * o componente seja carregado.
   */
  ngOnInit(): void {
    this.service.list(this.pageCurrent).subscribe((listThoughts) => {
        this.listThoughts = listThoughts;
    });
  }

}

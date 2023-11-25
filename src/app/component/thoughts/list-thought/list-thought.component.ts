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
  thereAreMoreThoughts: boolean = true;
  filter: string = '';

  constructor(private service: ThoughtService) { }

  /**
   * Faz parte do ciclo de vida do componente, toda lógica que você queira que seja executada assim que
   * o componente seja carregado.
   */
  ngOnInit(): void {
    this.service.list(this.pageCurrent, this.filter).subscribe((listThoughts) => {
        this.listThoughts = listThoughts;
    });
  }

  loadingMoreThoughts() {
    this.service.list(++this.pageCurrent, this.filter)
      .subscribe(listThoughts => {
        /**
         * (...) Sintaxe de espalhamento do JS, significa que vamos incrementando
         * os pensamentos que existe e mais os seis que foram carregados a cada página.
         */
        this.listThoughts.push(...listThoughts);
        if (!listThoughts.length) {
          this.thereAreMoreThoughts = false;
        }
    });
  }

  searchThoughts() {
    this.thereAreMoreThoughts = true;
    this.pageCurrent = 1;
    this.service.list(this.pageCurrent, this.filter)
      .subscribe(listThoughts => {
        this.listThoughts = listThoughts;
      });
  }

}

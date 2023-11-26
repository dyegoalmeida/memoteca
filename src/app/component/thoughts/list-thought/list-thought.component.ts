import { Component, OnInit } from '@angular/core';
import {Thought} from "../thought";
import {ThoughtService} from "../thought.service";
import {Router} from "@angular/router";

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
  favorite: boolean = false;
  listFavorite: Thought[] = [];
  title: string = 'Meu Mural';

  constructor(private service: ThoughtService, private router: Router) { }

  /**
   * Faz parte do ciclo de vida do componente, toda lógica que você queira que seja executada assim que
   * o componente seja carregado. Ele só é executado uma vez.
   */
  ngOnInit(): void {
    this.service.list(this.pageCurrent, this.filter, this.favorite).subscribe((listThoughts) => {
      this.listThoughts = listThoughts;
    });
  }

  /**
   * Recarrega o componente novamente
   */
  loadingComponent() {
    this.favorite = false;
    this.pageCurrent = 1;
    /**
     * Por que eu tive que fazer isso? Porque por padrão o roteador reutiliza a instância de um componente
     * quando você navega para esse mesmo tipo de componente sem ter visitado um componente diferente primeiro.
     */
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  loadingMoreThoughts() {
    this.service.list(++this.pageCurrent, this.filter, this.favorite)
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
    this.service.list(this.pageCurrent, this.filter, this.favorite)
      .subscribe(listThoughts => {
        this.listThoughts = listThoughts;
      });
  }

  listFavorites(){
    this.title = 'Meus Favoritos';
    this.favorite = true;
    this.thereAreMoreThoughts = true;
    this.pageCurrent = 1;
    this.service.list(this.pageCurrent, this.filter, this.favorite)
      .subscribe(listFavoriteThoughts => {
        this.listThoughts = listFavoriteThoughts
        this.listFavorite = listFavoriteThoughts
      });
  }

}

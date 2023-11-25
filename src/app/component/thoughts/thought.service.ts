import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Thought} from "./thought";
import {Observable, ObservedValueTupleFromArray} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {
  private readonly API = 'http://localhost:3000/thoughts';
  constructor(private http: HttpClient) { }

  list(page:  number, filter: string): Observable<Thought[]>{
    const itensByPage = 6;

    let params = new HttpParams()
      .set("_page", page)
      .set("_limit", itensByPage)

    if (filter.trim()){
      params = params.set("q", filter);
    }

    return this.http.get<Thought[]>(this.API, { params });
  }

  create(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API, thought);
  }

  edit(thought: Thought): Observable<Thought>{
    const url = `${this.API}/${thought.id}`;
    return this.http.put<Thought>(url, thought);
  }

  delete(id: number): Observable<Thought>{
    const url = `${this.API}/${id}`;
    return this.http.delete<Thought>(url);
  }

  searchById(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.get<Thought>(url);
  }
}

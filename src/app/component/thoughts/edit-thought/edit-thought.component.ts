import { Component, OnInit } from '@angular/core';
import {Thought} from "../thought";
import {ThoughtService} from "../thought.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent implements OnInit {

  thought: Thought = {
    authorship: "",
    content: "",
    model: ""
  }

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchById(parseInt(id!)).subscribe((thought)=>{
      this.thought = thought;
    });
  }

  editThought(){
    this.service.edit(this.thought).subscribe(() => {
      this.router.navigate(['/listThought']);
    });
  }

  cancel(){
    this.router.navigate(['/listThought']);
  }

}

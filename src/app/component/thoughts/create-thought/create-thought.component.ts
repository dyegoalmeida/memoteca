import { Component, OnInit } from '@angular/core';
import {Thought} from "../thought";
import {ThoughtService} from "../thought.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  form!: FormGroup;
  constructor(
    private service: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
        content: ['Formulário Reativo'],
        authorship: ['Dyego Almeida'],
        model: ['model1']
    });
  }
  createThought() {
    this.service.create(this.form.value).subscribe(() => {
      this.router.navigate(['/listThought']);
    })
  }

  cancelThought(){
    alert("Pensamento cancelado");
  }


}

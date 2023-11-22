import { Component, OnInit } from '@angular/core';
import {Thought} from "../thought";
import {ThoughtService} from "../thought.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
        content: ['', Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),

        ])],
        authorship: ['', Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        model: ['model1']
    });
  }
  createThought() {
    console.log(this.form.get('authorship')?.errors);
    if (this.form.valid){
      this.service.create(this.form.value).subscribe(() => {
        this.router.navigate(['/listThought']);
      })
    }
  }

  cancelThought(){
    alert("Pensamento cancelado");
  }


}

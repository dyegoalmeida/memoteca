import { Component, OnInit } from '@angular/core';
import {ThoughtService} from "../thought.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {smallLettersValidator} from "./smallLettersValidators";

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
          Validators.minLength(3),
          smallLettersValidator
        ])],
        model: ['model1']
    });
  }
  createThought() {
    if (this.form.valid){
      this.service.create(this.form.value).subscribe(() => {
        this.router.navigate(['/listThought']);
      })
    }
  }

  cancelThought(){
    this.router.navigate(['/listThought']);
  }

  enabledButton(): string {
    if (this.form.valid) {
      return 'button'
    } else {
      return 'button__disabled'
    }
  }
}

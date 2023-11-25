import { Component, OnInit } from '@angular/core';
import {ThoughtService} from "../thought.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Thought} from "../thought";

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.searchById(parseInt(id!)).subscribe((thought: Thought) => {

      this.form = this.formBuilder.group({
        id: [thought.id],
        content: [thought.content, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        authorship: [thought.authorship, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        model: [thought.model],
        favorite: [thought.favorite]
      })

    })
  }

  editThought(){
    if (this.form.valid){
      this.service.edit(this.form.value).subscribe(() => {
        this.router.navigate(['/listThought']);
      });
    }
  }

  cancel(){
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

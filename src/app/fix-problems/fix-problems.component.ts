import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fix-problems',
  templateUrl: './fix-problems.component.html',
  styleUrls: ['./fix-problems.component.scss']
})
export class FixProblemsComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

}

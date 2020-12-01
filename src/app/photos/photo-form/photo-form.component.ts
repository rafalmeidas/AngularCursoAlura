import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONTENT_ATTR } from '@angular/compiler';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    });

  }

  upload(){
    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;
    console.log(description);
    console.log(allowComments);
    console.log(this.file);
    
  }



}

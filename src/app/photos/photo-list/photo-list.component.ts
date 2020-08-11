import { Component, OnInit } from '@angular/core';

import { PhotoService } from '../photo/photoService';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string;

  constructor(
    private photoService: PhotoService,
    private activated: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const userName = this.activated.snapshot.params.userName;
    this.photoService
      .listFromUser(userName)
      .subscribe(photos => this.photos = photos);
  }

}

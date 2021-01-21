import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './photo-details.component.html',
    styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit{

    photo$: Observable<Photo>;
    idPhoto: number;

    constructor(
        private route: ActivatedRoute,
        private photoService: PhotoService
    ){}

    ngOnInit(): void {
        this.idPhoto = this.route.snapshot.params.idPhoto;
        this.photo$ = this.photoService.findById(this.idPhoto);
    }

}
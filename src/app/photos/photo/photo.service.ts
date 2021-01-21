import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from './photo';
import { PhotoComment } from './photo-comment';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    API: string = 'http://localhost:3000/';

    constructor(private http: HttpClient) { }

    listFromUser(userName: string) {
        return this.http
            .get<Photo[]>(`${this.API}${userName}/photos`);
    }

    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams().append('page', page.toString());

        return this.http
            .get<Photo[]>(`${this.API}${userName}/photos`, { params });
    }

    upload (description: string, allowComments: boolean, file: File){
        const formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComments ? 'true' : 'false');
        formData.append('imageFile', file);
        
        return this.http.post( this.API + 'photos/upload', formData);
    }

    findById(id: number) {
        return this.http.get<Photo>(this.API + 'photos/' + id);
    }

    getComments(photoId: number) {
        return this.http.get<PhotoComment[]>(
            this.API + 'photos/' + photoId + '/comments');
    }
}
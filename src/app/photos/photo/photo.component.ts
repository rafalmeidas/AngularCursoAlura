import { Component, Input } from '@angular/core';

const CLOUD: string = 'http://localhost:3000/imgs/'

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html',
    
})
export class PhotoComponent {

    private _url = '';

    @Input() description = '';

    @Input() set url(url: string) {
        if(!url.startsWith('data')){
            this._url = CLOUD + url; //concatena o caminho com o nome da imagem para exibir
        } else{
            this._url = url;
        }
    }

    get url(){
        return this._url;
    }
}
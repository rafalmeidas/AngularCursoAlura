import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit, OnDestroy{
    
    //Evento onTyping esse foi o nome dado poderia ser qualquer um
    @Output() onTyping = new EventEmitter<string>();
    debounce: Subject<string> = new Subject<string>();

    ngOnInit(): void {   
        this.debounce
        .pipe(debounceTime(300))
        .subscribe(filter => this.onTyping.emit(filter)
        );
    }

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }

}
import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() item:any;
  @Output() itemDelete:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(item: any){
    this.itemDelete.emit(item);
    alert('Removing song from your list');
  }

  
}

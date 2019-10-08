import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  @Input() element;
  @Output() storyEvent = new EventEmitter<{}>();
  constructor() { }

  ngOnInit() {
  }

  displayStory(element) {
    this.storyEvent.emit(element);
  }

}

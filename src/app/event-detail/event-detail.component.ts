import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})


export class EventDetailComponent implements OnInit {


  constructor() {

  }


  /**
   * Get events detail from home page
   */
  @Input() eventData: string;

  /**
   * Send event data to display which is clicked
   */
  @Output() sendData = new EventEmitter<string>();

  /**
   * Send event data to delete which is clicked
   */
  @Output() deleteData = new EventEmitter<string>();

  ngOnInit() {

  }

  /**
   * To send event record to home page to display
   * @param data to store and send event record
   */
  viewDetail(data) {
    this.sendData.emit(data);
  }

  /**
   * To send event record to home page to delete
   * @param data to store and send event record
   */
  removeDetail(data) {
    this.deleteData.emit(data);
  }
}

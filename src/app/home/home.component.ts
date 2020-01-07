import { Component, OnInit } from '@angular/core';

interface KeyValuePair {
  title: string;
  detail: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newTitle: string;
  newDetail: string;
  eventDetails: KeyValuePair[] = [
    { title: 'Birthday', detail: 'Today is my birtday I invite you all to come.' },
    { title: 'Seminar', detail: 'A seminar on AngularJS for all who want to learn to create SPA.' },
    { title: 'Opening', detail: 'A new mobile shop opening in valsad 50% off.' }
  ];
  selectEvent: KeyValuePair = { title: null, detail: null };

  constructor() {
    this.newTitle = null;
    this.newDetail = null;
  }

  ngOnInit() {

  }


  /**
   * To get one record from event-detail and store in variable
   * @param event retrive record from event-detail
   */
  getData(event: KeyValuePair) {
    console.log(event);
    this.selectEvent = event;
  }

  /**
   * To delete record which is clicked on event-detail
   * @param event retrive record from event-detail
   */
  delete(event: KeyValuePair) {
    const index = this.eventDetails.indexOf(event);
    if (confirm('Are You Sure To Delete This Record?')) {
      this.eventDetails.splice(index, 1);
    }
  }

  /**
   * To add new event
   */
  addEvent() {
    if (this.newTitle === null || this.newDetail === null) {
      alert('Empty Record Not Allowed!');
    } else {
      this.eventDetails.push({ title: this.newTitle, detail: this.newDetail });
      this.newTitle = null;
      this.newDetail = null;
    }

  }
}

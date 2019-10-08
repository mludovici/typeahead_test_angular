import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from  'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private http: HttpClient) { }

  api_url = `https://newsapi.org/v2/everything?q="bitcoin"&apiKey=db277137bd874809938ecca98f1b2cff`;

  title = 'searchahead';
  content;
  previousEvent;
  results;
  story;
  
  async getContent(event: Event) {
    this.story = null;
    console.log("Event: ", event);

    let searchTerm = (<HTMLInputElement>event.target).value;
    let api_url = `https://newsapi.org/v2/everything?q="${searchTerm}"&pageSize=5&apiKey=db277137bd874809938ecca98f1b2cff`;
    

    return this.http.get(api_url).pipe(map(response => {
      console.log(response["articles"]);
      return response["articles"];
    }))
    .subscribe(results => {
      if (results.length > 0) {
        this.results = results
      } else {
        this.results = null;
      }
    });
  }

  showStory(storyItem) {
    if (storyItem) {
      this.story = storyItem;
      this.results = null;
    }
  }

}

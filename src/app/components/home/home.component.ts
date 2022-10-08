import { Component, OnInit } from '@angular/core';
import { Topics } from 'src/app/models/topics';
import { TopicListService } from 'src/app/services/topic-list.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topics : Array<Topics> = new Array<Topics>();
  constructor(private topicListService:TopicListService) { }

  ngOnInit(): void {
    this.topics = this.topicListService.ListTopics();
    // .pipe(first())
    // .subscribe(topics => this.topics = topics);
  }

}

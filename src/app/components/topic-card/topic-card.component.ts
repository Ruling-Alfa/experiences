import { Component, Input, OnInit } from '@angular/core';
import { Topics } from 'src/app/models/topics';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.css']
})
export class TopicCardComponent implements OnInit {
  @Input() blog!: Topics;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBlogSelect(blogId: number){
    this.router.navigateByUrl('/user');
  }

}

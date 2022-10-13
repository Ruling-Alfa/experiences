import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Topics } from '../models/topics';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopicListService {

  constructor(private http: HttpClient) { }

  ListTopics(): Array<Topics> {
    // return this.http.get<Topics[]>(`${environment.baseUrl}topics`);
    const topics : Array<Topics> = new Array<Topics>();
    topics.push({
      id: 1,
      name: 'SOLID Principles',
      subtitle: 'The first five Principles of Object Oriented Design',
      shortDescription: 'SOLID is an acronym for 5 object oriented principles by uncle BOB. This principles were found to improve the entendibility and the maintainability of a project as it grows with time. Following these practices starting from the begining of the project will reduce the chances of code refactoring and avoids the induction of code smells '
    });
    return topics;
  }
}

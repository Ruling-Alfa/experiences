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
      name: 'How to start blogging!',
      subtitle: 'Some sub title',
      shortDescription: 'What can AWS do for you? Carl and Richard talk to Isaac Levin about the experience of being a .NET developer working with Amazon Web Services. Isaac talks about the broader strategy of moving applications to the cloud and what Amazon offers to make your life easier, with various migration and validation tools that can help you understand how an existing application will behave on cloud services. The goal is to get beyond the virtual machine and into containers, serverless, and more!'
    });
    return topics;
  }
}

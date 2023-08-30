import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RedditModel } from '../models/reddit-model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class RedditService {
  url: string = 'https://www.reddit.com/r/';
  constructor(private http: HttpClient) {}

  //subreddit name goes into parameter
  getReddit(sub: string): Observable<RedditModel> {
    return this.http.get<RedditModel>(`${this.url}${sub}/.json`);
  }
}

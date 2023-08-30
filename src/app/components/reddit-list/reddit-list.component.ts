import { Component, OnInit } from '@angular/core';
import { RedditModel } from 'src/app/models/reddit-model';
import { RedditService } from 'src/app/services/reddit.service';

@Component({
  selector: 'app-reddit-list',
  templateUrl: './reddit-list.component.html',
  styleUrls: ['./reddit-list.component.css'],
})
export class RedditListComponent implements OnInit {
  redditResult: RedditModel = {} as RedditModel;
  subreddit: string = 'aww';
  status: string = '';

  constructor(private _redditService: RedditService) {}

  ngOnInit() {
    this.CallApi();
  }
  //

  CallApi(): void {
    this._redditService.getReddit(this.subreddit).subscribe(
      (response: RedditModel) => {
        console.log(response);
        this.redditResult = response;
        //
        this.redditResult.data.children.splice(10);
        this.status = '';
        //leave the p tag status blank if no error
        //limit to 10 posts per page
      },
      (err) => {
        console.log("Can't find subreddit.");
        this.status = 'Could not find subreddit';
      }
    );
  }
}

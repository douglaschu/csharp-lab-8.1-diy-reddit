import { Component, Input, OnInit } from '@angular/core';
import { Child } from 'src/app/models/reddit-model';
import { RedditService } from 'src/app/services/reddit.service';

@Component({
  selector: 'app-reddit-post',
  templateUrl: './reddit-post.component.html',
  styleUrls: ['./reddit-post.component.css'],
})
export class RedditPostComponent implements OnInit {
  @Input() post: Child = {} as Child;
  //calling the child post "post"

  constructor(private _postService: RedditService) {}

  ngOnInit(): void {}
}

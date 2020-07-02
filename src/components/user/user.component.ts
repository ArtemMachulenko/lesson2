import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/user/user.service";
import {Post} from "../../models/Post";
import {Comment} from "../../models/Comment";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: User;
  posts: Post[];
  comments: Comment[];
  isPostOpen: boolean;
  isCommentOpen: boolean;

  constructor(private UserService: UserService) {
  }

  ngOnInit(): void {
  }

  showPosts(userId: number): void {
    this.UserService.postsOfUserById(userId).subscribe(data => {
      this.posts = data;
    });

    this.isPostOpen = !this.isPostOpen;
  }

  showComments(postId: number): void {
    this.UserService.commentsOfPostById(postId).subscribe(data => {
      this.comments = data;
    });

    this.isCommentOpen = !this.isCommentOpen;
  }
}

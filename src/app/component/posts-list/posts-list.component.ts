import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  public posts: Post[] = [];

  constructor(
    private postsService: PostsService
  ) {
    postsService.readPosts().subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
   }

  ngOnInit(): void {
  }

}

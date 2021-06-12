import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/post.model';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-post-show',
  templateUrl: './post-show.component.html',
  styleUrls: ['./post-show.component.css']
})
export class PostShowComponent implements OnInit {

  post: Post = {
    userId: 0,
    id: 0,
    body: '',
    title: '',
  };

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id') || '0';

    this.postsService.readPost(postId).subscribe(
      (post: Post) => {
       this.post = post;
      }
    );
  }

  public onGoBack(): void {
    this.router.navigate(['/', 'posts']);
  }

}

import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() post: Post = {
    userId: 0,
    id: 0,
    body: '',
    title: '',
  };

  @Input() showButton: boolean = true;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public onShowPost(id: number): void {
    this.router.navigate(['/','posts', id]);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post.model';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [
   {
    userId: 123,
    id: 1,
    title: 'lorem ipsum',
    body: 'lorem ipsum exun non'
   },
   {
    userId: 124,
    id: 2,
    title: 'lorem ipsum2',
    body: 'lorem ipsum exun non2'
   },
   {
    userId: 125,
    id: 3,
    title: 'lorem ipsum3',
    body: 'lorem ipsum exun non3'
   },
  ];

  constructor(
    private http: HttpClient
  ) { }

  public fetchPosts(): Post[] {
    return this.posts;
  }

  public readPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(BASE_URL);
  }

  public readPost(id: string): Observable<Post> {
    return this.http.get<Post>(BASE_URL + '/' + id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'contentType': 'application/json' 
  })
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  url: string = 'https://jsonplaceholder.typicode.com/todos';

  limit: string = '?_limit=5';

  constructor(private http: HttpClient) {
    
   }
  
  // get todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url + this.limit);
  }

  // update todos (completed state)
  updateTodo(todo: Todo): Observable<any> {
    return this.http.put(`${this.url + '/' + todo.id}`, todo, httpOptions)
  }

  // delte todo
  deleteTodo(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`${this.url + '/' + todo.id}`, httpOptions)
  }

  // post todo
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, todo, httpOptions);
  }
}
